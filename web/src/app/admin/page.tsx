import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import LogoutButton from "../dashboard/LogoutButton";

export default async function AdminPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getClaims();

  if (error || !data?.claims) {
    redirect("/login");
  }

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("role, full_name")
    .eq("id", data.claims.sub)
    .single();

  if (profileError || profile?.role !== "admin") {
    redirect("/dashboard");
  }

  const adminName = profile.full_name || "Administrator";

  return (
    <main className="min-h-screen bg-[#F7F6F0] px-4 py-10">
      <div className="mx-auto max-w-6xl">

        <header className="rounded-3xl bg-[#243B2A] p-8 text-white shadow-lg">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#AFC9A9]">
            Great Tent Cathedral
          </p>

          <h1 className="mt-4 text-3xl font-bold md:text-4xl">
            Administration Dashboard
          </h1>

          <p className="mt-3 text-[#DCE8D8]">
            Welcome, {adminName}. Manage your cathedral website from here.
          </p>
        </header>

        <section className="mt-8 grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl border border-[#DCE8D8] bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-[#243B2A]">
              Members
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              View and manage registered cathedral members.
            </p>
          </div>

          <div className="rounded-2xl border border-[#DCE8D8] bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-[#243B2A]">
              Announcements
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Prepare and publish important church announcements.
            </p>
          </div>

          <div className="rounded-2xl border border-[#DCE8D8] bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-[#243B2A]">
              Events
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Organize and manage upcoming cathedral events.
            </p>
          </div>

        </section>

        <section className="mt-8 rounded-2xl border border-[#DCE8D8] bg-white p-7 shadow-sm">
          <h2 className="text-xl font-bold text-[#243B2A]">
            Administrator Account
          </h2>

          <p className="mt-3 text-gray-600">
            Signed in as: {adminName}
          </p>

          <p className="mt-2 font-semibold text-[#243B2A]">
            Role: Administrator
          </p>

          <LogoutButton />
        </section>

        <footer className="mt-10 pb-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Great Tent Cathedral. Administration Portal.
        </footer>

      </div>
    </main>
  );
}
