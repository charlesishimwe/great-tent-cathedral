"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setMessage(error.message);
      return;
    }

    window.location.href = "/dashboard";
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F7F6F0] px-4 py-12">
      <div className="w-full max-w-md rounded-2xl border border-[#DCE8D8] bg-white p-8 shadow-lg">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-[#243B2A]">
            Welcome Back
          </h1>
          <p className="mt-3 text-sm text-gray-600">
            Sign in to your Great Tent Cathedral account.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-[#243B2A]">
              Email Address
            </label>
            <input
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-lg border border-[#AFC9A9] px-4 py-3 text-gray-900 outline-none focus:border-[#718D6D] focus:ring-2 focus:ring-[#DCE8D8]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#243B2A]">
              Password
            </label>
            <input
              type="password"
              required
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full rounded-lg border border-[#AFC9A9] px-4 py-3 text-gray-900 outline-none focus:border-[#718D6D] focus:ring-2 focus:ring-[#DCE8D8]"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-[#243B2A] px-4 py-3 font-semibold text-white transition hover:bg-[#718D6D] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        {message && (
          <div
            role="alert"
            className="mt-5 rounded-lg bg-[#F7F6F0] p-4 text-sm text-[#243B2A]"
          >
            {message}
          </div>
        )}

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="font-semibold text-[#243B2A] underline hover:text-[#718D6D]"
          >
            Create an account
          </Link>
        </p>
      </div>
    </main>
  );
}
