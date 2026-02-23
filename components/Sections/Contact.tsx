"use client";

import Briefcase from "@/components/ui/Icons/Briefcase";
import Calendar from "@/components/ui/Icons/Calendar";
import Phone from "@/components/ui/Icons/Phone";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import { siteConfig } from "@/config/site";
import { useTranslation } from "@/hooks/useTranslation";

const Contact = () => {
  const t = useTranslation();

  return (
    <section id="contact" className="border border-gray-300 bg-transparent px-5 py-12">
      <div className="mx-auto max-w-7xl">
        <SectionTitle title={t.sections.contact.title} />

        <div className="grid gap-6 md:grid-cols-3">
          <div className="flex flex-col items-center rounded-lg border border-gray-200 bg-white/90 p-6 text-center shadow-sm">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">{t.sections.contact.appointment.title}</h3>
            <p className="mb-4 text-sm leading-relaxed text-gray-600">
              {t.sections.contact.appointment.description}
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
            >
              <Calendar className="h-4 w-4" />
              {t.sections.contact.appointment.button}
            </a>
          </div>

          <div className="flex flex-col items-center rounded-lg border border-gray-200 bg-white/90 p-6 text-center shadow-sm">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white">
              <Briefcase className="h-6 w-6" />
            </div>
            <h3 className="mb-4 text-lg font-semibold">{t.sections.contact.hours.title}</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <span className="text-green-600">&#10003;</span>
                {t.sections.contact.hours.weekdays}
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-500">&#10007;</span>
                {t.sections.contact.hours.saturday}
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-500">&#10007;</span>
                {t.sections.contact.hours.sunday}
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center rounded-lg border border-gray-200 bg-white/90 p-6 text-center shadow-sm">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">{t.sections.contact.emergency.title}</h3>
            <p className="mb-4 text-xl font-bold text-gray-900">{siteConfig.phone}</p>
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-2 rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
            >
              <Phone className="h-4 w-4" />
              {t.sections.contact.emergency.button}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
