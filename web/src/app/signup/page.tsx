"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";

export default function SignupPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSignup(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage("");

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    if (password.length < 8) {
      setMessage("Your password must contain at least 8 characters.");
      return;
    }

    setLoading(true);

    const supabase = createClient();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    setLoading(false);

    if (error) {
      setMessage(error.message);
      return;
    }

    setMessage(
      "Registration successful! Please check your email and click the verification link to activate your account."
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F7F6F0] px-4 py-12">
      <div className="w-full max-w-md rounded-2xl border border-[#DCE8D8] bg-white p-8 shadow-lg">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-[#243B2A]">
            Create Your Account
          </h1>
          <p className="mt-3 text-sm text-gray-600">
            Welcome to the Great Tent Cathedral community.
          </p>
        </div>

        <form onSubmit={handleSignup} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-[#243B2A]">
              Full Name
            </label>
            <input
              type="text"
              required
              autoComplete="name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full rounded-lg border border-[#AFC9A9] px-4 py-3 text-gray-900 outline-none focus:border-[#718D6D] focus:ring-2 focus:ring-[#DCE8D8]"
            />
          </div>

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
              minLength={8}
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="At least 8 characters"
              className="w-full rounded-lg border border-[#AFC9A9] px-4 py-3 text-gray-900 outline-none focus:border-[#718D6D] focus:ring-2 focus:ring-[#DCE8D8]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#243B2A]">
              Confirm Password
            </label>
            <input
              type="password"
              required
              minLength={8}
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Enter your password again"
              className="w-full rounded-lg border border-[#AFC9A9] px-4 py-3 text-gray-900 outline-none focus:border-[#718D6D] focus:ring-2 focus:ring-[#DCE8D8]"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-[#243B2A] px-4 py-3 font-semibold text-white transition hover:bg-[#718D6D] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        {message && (
          <div
            role="status"
            aria-live="polite"
            className="mt-5 rounded-lg bg-[#F7F6F0] p-4 text-sm text-[#243B2A]"
          >
            {message}
          </div>
        )}

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-[#243B2A] underline hover:text-[#718D6D]"
          >
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
}
