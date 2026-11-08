import { createClient } from "@/utils/supabase/client";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://great-tent-cathedral.onrender.com";

export async function getMyBackendProfile() {
  const supabase = createClient();

  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (error) {
    throw new Error("Unable to retrieve your login session.");
  }

  if (!session?.access_token) {
    throw new Error("Please sign in to access your profile.");
  }

  const response = await fetch(`${API_URL}/api/me/profile`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${session.access_token}`,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Unable to retrieve your backend profile.");
  }

  return response.json();
}
