"use client";
import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    const { error } = await createClient().auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/callback?next=/reset-password`,
    });
    setLoading(false);
    setMessage(error ? error.message : "If an account exists for this email, a reset link will be sent. Check your inbox and spam folder.");
  }

  return <main className="flex min-h-screen items-center justify-center bg-[#F7F6F0] px-4 py-12">
    <div className="w-full max-w-md rounded-2xl border border-[#DCE8D8] bg-white p-8 shadow-lg">
      <h1 className="text-center text-3xl font-bold text-[#243B2A]">Forgot Password?</h1>
      <p className="my-3 text-center text-sm text-gray-600">Enter your account email to request a password reset link.</p>
      <form onSubmit={submit} className="space-y-5">
        <label className="block text-sm font-medium text-[#243B2A]">Email Address
          <input type="email" required autoComplete="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" className="mt-2 w-full rounded-lg border border-[#AFC9A9] px-4 py-3 text-gray-900" />
        </label>
        <button type="submit" disabled={loading} className="w-full rounded-lg bg-[#243B2A] px-4 py-3 font-semibold text-white disabled:opacity-60">{loading ? "Sending..." : "Send Reset Link"}</button>
      </form>
      {message && <p role="status" className="mt-5 rounded-lg bg-[#F7F6F0] p-4 text-sm text-[#243B2A]">{message}</p>}
      <p className="mt-6 text-center text-sm text-gray-600">Remember your password? <Link href="/login" className="font-semibold text-[#243B2A] underline">Sign in</Link></p>
    </div>
  </main>;
}
