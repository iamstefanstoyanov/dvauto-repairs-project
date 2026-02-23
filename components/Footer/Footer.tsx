"use client";

import Facebook from "@/components/ui/Icons/Facebook";
import Instagram from "@/components/ui/Icons/Instagram";
import Mail from "@/components/ui/Icons/Mail";
import Phone from "@/components/ui/Icons/Phone";
import { siteConfig } from "@/config/site";
import { useTranslation } from "@/hooks/useTranslation";

const Footer = () => {
  const t = useTranslation();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-5 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-3 text-lg font-bold text-white">{t.brand}</h3>
            <p className="mb-5 text-sm leading-relaxed">{t.footer.description}</p>
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-bold text-white">{t.footer.contactInfo}</h3>
            <ul className="space-y-3 text-sm">
              <li>
                {siteConfig.address.line1}
                <br />
                {siteConfig.address.line2}
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="inline-flex items-center gap-1.5 hover:text-white"
                >
                  <Phone className="h-3.5 w-3.5" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-1.5 hover:text-white"
                >
                  <Mail className="h-3.5 w-3.5" />
                  {siteConfig.email}
                </a>
              </li>
              <li>{siteConfig.hours}</li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="mb-3 text-lg font-bold text-white">{t.footer.ourServices}</h3>
            <ul className="columns-1 gap-x-8 space-y-2 text-sm lg:columns-2">
              {t.footer.services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => {
                      document.getElementById("what-we-do")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="hover:text-white"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 px-5 py-4">
        <div className="mx-auto max-w-7xl text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} {t.brand}. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
