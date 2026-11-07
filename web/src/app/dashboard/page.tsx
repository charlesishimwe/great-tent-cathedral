
import LogoutButton from "./LogoutButton";
import BackendProfile from "./BackendProfile";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getClaims();

  if (error || !data?.claims) {
    redirect("/login");
  }

  const email =
    typeof data.claims.email === "string"
      ? data.claims.email
      : "Cathedral Member";

  const fullName =
    typeof data.claims.user_metadata?.full_name === "string"
      ? data.claims.user_metadata.full_name
      : "Cathedral Member";

  return (
    <main className="min-h-screen bg-[#F7F6F0] px-4 py-10">
      <div className="mx-auto max-w-6xl">

        {/* Welcome Header */}
        <header className="rounded-3xl bg-[#243B2A] p-8 text-white shadow-lg">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#AFC9A9]">
            Great Tent Cathedral
          </p>

          <h1 className="mt-4 text-3xl font-bold md:text-4xl">
            Welcome, {fullName}
          </h1>

          <p className="mt-3 max-w-2xl text-[#DCE8D8]">
            Welcome to your member space. Stay connected with the Great Tent
            Cathedral community, access resources and follow cathedral updates.
          </p>
        </header>

        {/* Account and Community */}
        <section className="mt-8 grid gap-6 md:grid-cols-2">

          {/* Account Information */}
          <div className="rounded-2xl border border-[#DCE8D8] bg-white p-7 shadow-sm">
            <h2 className="text-xl font-bold text-[#243B2A]">
              My Account
            </h2>

            <p className="mt-5 text-sm text-gray-500">
              Full name
            </p>

            <p className="mt-1 font-semibold text-[#243B2A]">
              {fullName}
            </p>

            <p className="mt-5 text-sm text-gray-500">
              Email address
            </p>

            <p className="mt-1 break-all font-semibold text-[#243B2A]">
              {email}
            </p>

            <div className="mt-6 rounded-xl bg-[#DCE8D8] p-4">
              <p className="font-semibold text-[#243B2A]">
                Account status
              </p>

              <p className="mt-1 text-sm text-[#243B2A]">
                Authenticated member
              </p>
            </div>

            <LogoutButton />
          </div>

          {/* Cathedral Community */}
          <div className="rounded-2xl border border-[#DCE8D8] bg-white p-7 shadow-sm">
            <h2 className="text-xl font-bold text-[#243B2A]">
              Cathedral Community
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Stay connected with the Great Tent Cathedral. Follow community
              announcements, spiritual messages, events and activities.
            </p>

            <div className="mt-6 rounded-xl bg-[#F7F6F0] p-5">
              <p className="font-semibold text-[#243B2A]">
                Our mission
              </p>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Building a connected community through faith, fellowship and
                the message of LA CARPA DE YO SOY JOSÉ.
              </p>
            </div>
          </div>

        </section>

        {/* Backend Connection */}
        <section className="mt-8 rounded-2xl border border-[#DCE8D8] bg-white p-7 shadow-sm">
          <h2 className="text-xl font-bold text-[#243B2A]">
            Platform Connectivity
          </h2>

          <p className="mt-3 text-gray-600">
            Your member profile is connected to the Great Tent Cathedral
            backend services.
          </p>

          <BackendProfile />
        </section>

        {/* Member Resources */}
        <section className="mt-8 rounded-2xl border border-[#DCE8D8] bg-white p-7 shadow-sm">
          <h2 className="text-xl font-bold text-[#243B2A]">
            Member Resources
          </h2>

          <p className="mt-3 text-gray-600">
            This area will provide access to member resources and cathedral
            information as those features become available.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-xl bg-[#F7F6F0] p-5">
              <h3 className="font-bold text-[#243B2A]">
                Announcements
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Important cathedral news and community updates.
              </p>
            </div>

            <div className="rounded-xl bg-[#F7F6F0] p-5">
              <h3 className="font-bold text-[#243B2A]">
                Events
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Information about upcoming gatherings and activities.
              </p>
            </div>

            <div className="rounded-xl bg-[#F7F6F0] p-5">
              <h3 className="font-bold text-[#243B2A]">
                Language Communities
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Connect with the nine official language communities.
              </p>
            </div>

          </div>
        </section>

        {/* Footer */}
        <footer className="mt-10 pb-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Great Tent Cathedral. All rights reserved.
        </footer>

      </div>
    </main>
  );
}




