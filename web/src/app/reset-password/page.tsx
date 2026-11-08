
"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

export default function ResetPasswordPage() {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    if (password.length < 8) {
      setMessage("Your password must contain at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("The passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const supabase = createClient();

      const { error } = await supabase.auth.updateUser({
        password,
      });

      if (error) {
        setMessage(error.message);
        return;
      }

      await supabase.auth.signOut();

      router.replace("/login?message=password_updated");
    } catch {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F7F6F0] px-4 py-12">
      <section className="w-full max-w-md rounded-2xl border border-[#DCE8D8] bg-white p-8 shadow-lg">
        <h1 className="text-center text-3xl font-bold text-[#243B2A]">
          Set a New Password
        </h1>

        <p className="mt-3 text-center text-sm text-gray-600">
          Enter and confirm your new account password.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <label className="block text-sm font-medium text-[#243B2A]">
            New Password
            <input
              type="password"
              required
              minLength={8}
              autoComplete="new-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-2 w-full rounded-lg border border-[#AFC9A9] px-4 py-3 text-gray-900"
            />
          </label>

          <label className="block text-sm font-medium text-[#243B2A]">
            Confirm New Password
            <input
              type="password"
              required
              minLength={8}
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(event) =>
                setConfirmPassword(event.target.value)
              }
              className="mt-2 w-full rounded-lg border border-[#AFC9A9] px-4 py-3 text-gray-900"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-[#243B2A] px-4 py-3 font-semibold text-white disabled:opacity-60"
          >
            {loading ? "Updating..." : "Update Password"}
          </button>
        </form>

        {message && (
          <p
            role="alert"
            className="mt-5 rounded-lg bg-[#F7F6F0] p-4 text-sm text-[#243B2A]"
          >
            {message}
          </p>
        )}

        <p className="mt-6 text-center text-sm text-gray-600">
          Return to{" "}
          <a
            href="/login"
            className="font-semibold text-[#243B2A] underline"
          >
            Sign In
          </a>
        </p>
      </section>
    </main>
  );
}
