"use client";

import { languages } from "@/config/languages";
import { useLanguage, type LanguageCode } from "./LanguageProvider";

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <label className="inline-flex items-center gap-2">
      <span className="sr-only">Select language</span>
      <select
        value={language}
        onChange={(event) =>
          setLanguage(event.target.value as LanguageCode)
        }
        aria-label="Select language"
        className="rounded-full border border-[#243B2A]/30 bg-white/80 px-3 py-2 text-sm font-semibold text-[#243B2A] outline-none transition focus:ring-2 focus:ring-[#243B2A]"
      >
        {languages.map((item) => (
          <option key={item.name} value={item.name}>
            {item.flag} {item.nativeName}
          </option>
        ))}
      </select>
    </label>
  );
}
