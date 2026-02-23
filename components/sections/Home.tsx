"use client";

import { siteConfig } from "@/config/site";
import { useTranslation } from "@/hooks/useTranslation";
import { Phone } from "../ui/Icons/Phone";

export function Home() {
  const t = useTranslation();

  return (
    <section
      id="home"
      className="flex items-center min-h-dvh md:min-h-135 bg-transparent p-5"
    >
      <div className="flex w-full flex-col items-start justify-center gap-6 md:flex-row md:gap-12">
        <div className="max-w-3xl space-y-3 md:space-y-5">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            {t.sections.home.headline}
          </h1>
          <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
            {t.sections.home.subtitle}
          </p>
          <p className="text-base leading-relaxed text-gray-600 md:text-lg">
            {t.sections.home.description}
          </p>
          <div className="flex justify-center pt-2">
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-xs font-semibold text-white shadow-lg transition-colors hover:bg-red-700 md:px-6 md:py-3 md:text-base"
            >
              <Phone className="h-4 w-4 md:h-5 md:w-5" />
              {t.sections.home.emergencyCall}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
