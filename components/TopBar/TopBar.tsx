import Facebook from "@/components/ui/Icons/Facebook";
import Instagram from "@/components/ui/Icons/Instagram";
import Mail from "@/components/ui/Icons/Mail";
import Phone from "@/components/ui/Icons/Phone";
import { siteConfig } from "@/config/site";

const TopBar = () => (
  <div className="hidden bg-gray-900 px-5 py-2 text-sm text-white lg:block">
    <div className="mx-auto flex max-w-7xl items-center justify-between">
      <div className="flex items-center gap-4">
        <a
          href={`mailto:${siteConfig.email}`}
          className="flex items-center gap-1.5 transition-colors hover:text-gray-300"
        >
          <Mail className="h-4 w-4" />
          {siteConfig.email}
        </a>
        <a
          href={`tel:${siteConfig.phone}`}
          className="flex items-center gap-1.5 transition-colors hover:text-gray-300"
        >
          <Phone className="h-4 w-4" />
          {siteConfig.phone}
        </a>
      </div>
      <div className="flex items-center gap-3">
        <a
          href={siteConfig.socials.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-gray-300"
          aria-label="Facebook"
        >
          <Facebook className="h-4 w-4" />
        </a>
        <a
          href={siteConfig.socials.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-gray-300"
          aria-label="Instagram"
        >
          <Instagram className="h-4 w-4" />
        </a>
      </div>
    </div>
  </div>
);

export default TopBar;
