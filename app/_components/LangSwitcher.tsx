"use client";
import Link from "next/link";

const setLangCookie = (value: "ja" | "en") => {
  document.cookie = `lang=${value}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;
};

// Top-right lang toggle on the FV. Visually small, padded for easy tap.
// Clicking sets a `lang` cookie so middleware stops auto-redirecting.
export function LangSwitcher({
  lang,
  variant,
}: {
  lang: "ja" | "en";
  variant: "sp" | "pc";
}) {
  const isSp = variant === "sp";
  const text = isSp ? "text-[11px] tracking-[2px]" : "text-[16px] tracking-[3px]";
  const pad = isSp ? "px-[8px] py-[10px]" : "px-[14px] py-[10px]";
  const linkBase = `inline-flex items-center justify-center transition-opacity ${pad}`;
  return (
    <div className={`flex items-center text-white font-medium ${text}`}>
      <Link
        href="/"
        onClick={() => setLangCookie("ja")}
        className={`${linkBase} ${lang === "ja" ? "opacity-100" : "opacity-50 hover:opacity-100"}`}
        aria-current={lang === "ja" ? "page" : undefined}
      >
        JP
      </Link>
      <span className="opacity-40 select-none">/</span>
      <Link
        href="/en"
        onClick={() => setLangCookie("en")}
        className={`${linkBase} ${lang === "en" ? "opacity-100" : "opacity-50 hover:opacity-100"}`}
        aria-current={lang === "en" ? "page" : undefined}
      >
        EN
      </Link>
    </div>
  );
}
