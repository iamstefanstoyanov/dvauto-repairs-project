"use client";

import Card from "@/components/ui/Card/Card";
import Briefcase from "@/components/ui/Icons/Briefcase";
import Calendar from "@/components/ui/Icons/Calendar";
import Phone from "@/components/ui/Icons/Phone";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import { siteConfig } from "@/config/site";
import useTranslation from "@/hooks/useTranslation";

const Contact = () => {
  const t = useTranslation();

  return (
    <section id="contact" className="border border-gray-300 bg-gray-100/90 px-5 py-12">
      <div className="mx-auto max-w-7xl">
        <SectionTitle title={t.sections.contact.title} />

        <div className="grid gap-6 md:grid-cols-3">
          <Card icon={Phone} title={t.sections.contact.appointment.title} variant="contact">
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
          </Card>

          <Card icon={Briefcase} title={t.sections.contact.hours.title} variant="contact">
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
          </Card>

          <Card icon={Phone} title={t.sections.contact.emergency.title} variant="contact">
            <p className="mb-4 text-xl font-bold text-gray-900">{siteConfig.phone}</p>
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-2 rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
            >
              <Phone className="h-4 w-4" />
              {t.sections.contact.emergency.button}
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
