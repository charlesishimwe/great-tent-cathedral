"use client";

import { createClient } from "@/utils/supabase/client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleLogout() {
    setLoading(true);

    const supabase = createClient();
    await supabase.auth.signOut();

    router.replace("/login");
    router.refresh();
  }

  return (
    <button
      onClick={handleLogout}
      disabled={loading}
      className="mt-6 rounded-lg bg-[#243B2A] px-6 py-3 font-semibold text-white transition hover:bg-[#718D6D] disabled:opacity-60"
    >
      {loading ? "Signing Out..." : "Sign Out"}
    </button>
  );
}
