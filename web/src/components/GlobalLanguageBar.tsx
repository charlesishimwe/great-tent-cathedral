"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSelector from "@/i18n/LanguageSelector";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function GlobalLanguageBar() {
  const pathname = usePathname();
  const { t } = useLanguage();

  // The homepage already has its own language selector.
  if (pathname === "/") {
    return null;
  }

  return (
    <div className="fixed right-4 top-4 z-50 flex items-center gap-2 rounded-full border border-[#243B2A]/15 bg-white/95 p-2 shadow-md">
      <LanguageSelector />

      <Link
        href="/login"
        className="rounded-full bg-[#243B2A] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#405D46]"
      >
        {t("login")}
      </Link>
    </div>
  );
}