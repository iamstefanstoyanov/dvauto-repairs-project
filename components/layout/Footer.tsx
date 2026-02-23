"use client";

import { useTranslation } from "@/hooks/useTranslation";

export function Footer() {
  const t = useTranslation();

  return (
    <footer className="border border-gray-300 bg-white p-5">
      <div className="mx-auto max-w-7xl text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} {t.brand}. {t.footer.rights}
      </div>
    </footer>
  );
}
