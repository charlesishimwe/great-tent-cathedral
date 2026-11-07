"use client";

import { useEffect, useState } from "react";
import { getMyBackendProfile } from "@/lib/backend";

type ProfileResponse = {
  authenticated: boolean;
  profile: {
    id: string;
    full_name: string | null;
    role: string;
    created_at: string;
  } | null;
};

export default function BackendProfile() {
  const [profile, setProfile] = useState<ProfileResponse["profile"]>(null);
  const [status, setStatus] = useState("Loading...");
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    async function loadProfile() {
      try {
        const result = (await getMyBackendProfile()) as ProfileResponse;

        if (active) {
          setProfile(result.profile);
          setStatus("Connected to FastAPI and Supabase");
        }
      } catch (err) {
        if (active) {
          setError(
            err instanceof Error ? err.message : "Unable to load profile."
          );
          setStatus("Connection unavailable");
        }
      }
    }

    loadProfile();

    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="mt-6 rounded-xl border border-[#DCE8D8] bg-[#F7F6F0] p-4">
      <p className="font-semibold text-[#243B2A]">
        Backend Connection
      </p>

      <p className="mt-2 text-sm text-[#243B2A]">
        {status}
      </p>

      {profile && (
        <div className="mt-3 text-sm text-gray-600">
          <p>Member role: {profile.role}</p>
          <p>Profile: Retrieved successfully</p>
        </div>
      )}

      {error && (
        <p className="mt-2 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
