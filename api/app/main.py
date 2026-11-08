import os
from pathlib import Path

from dotenv import load_dotenv
from fastapi import FastAPI, Header, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from supabase import Client, create_client

PROJECT_ROOT = Path(__file__).resolve().parents[2]
load_dotenv(PROJECT_ROOT / ".env")

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_PUBLISHABLE_KEY = os.getenv("SUPABASE_PUBLISHABLE_KEY")

supabase: Client | None = None
if SUPABASE_URL and SUPABASE_PUBLISHABLE_KEY:
    supabase = create_client(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY)

app = FastAPI(
    title="Great Tent Cathedral API",
    description="Official multilingual community platform",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://great-tent-cathedral.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {
        "name": "Great Tent Cathedral",
        "platform": "LA CARPA DE YO SOY JOSÉ",
        "status": "operational",
        "version": "1.0.0",
    }


@app.get("/health")
def health():
    return {"status": "healthy", "api": "operational"}


@app.get("/health/supabase")
def supabase_health():
    if supabase is None:
        return {
            "status": "not_configured",
            "message": "Supabase environment configuration is missing.",
        }

    return {
        "status": "configured",
        "message": "Supabase client initialized successfully.",
    }


@app.get("/api/me/profile")
def get_my_profile(authorization: str | None = Header(default=None)):
    if supabase is None:
        raise HTTPException(
            status_code=503,
            detail="Supabase is not configured.",
        )

    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(
            status_code=401,
            detail="A valid Bearer access token is required.",
        )

    access_token = authorization.removeprefix("Bearer ").strip()

    if not access_token:
        raise HTTPException(
            status_code=401,
            detail="Access token is missing.",
        )

    try:
        user_response = supabase.auth.get_user(access_token)
        user = user_response.user

        if user is None:
            raise HTTPException(
                status_code=401,
                detail="Invalid or expired access token.",
            )

        user_client = create_client(
            SUPABASE_URL,
            SUPABASE_PUBLISHABLE_KEY,
        )
        user_client.postgrest.auth(access_token)

        profile_response = (
            user_client.table("profiles")
            .select("id, full_name, role, created_at")
            .eq("id", user.id)
            .maybe_single()
            .execute()
        )

        return {
            "authenticated": True,
            "profile": profile_response.data,
        }

    except HTTPException:
        raise
    except Exception:
        raise HTTPException(
            status_code=401,
            detail="Unable to authenticate or retrieve this profile.",
        )
