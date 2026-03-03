import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import TopBar from "@/components/TopBar/TopBar";
import { LanguageProvider } from "@/context/LanguageContext";
import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "DV AUTO REPAIRS LTD | Car & Van Repairs, Tyres & Servicing",
    template: "%s | DV AUTO REPAIRS LTD",
  },
  description:
    "DV AUTO REPAIRS LTD — professional car and van repair garage. Tyres, suspension, brakes, servicing, diagnostics and more. Quality work at fair prices.",
  keywords: [
    "car repair",
    "van repair",
    "tyres",
    "suspension",
    "brakes",
    "car servicing",
    "diagnostics",
    "garage",
    "DV AUTO REPAIRS LTD",
  ],
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "DV AUTO REPAIRS LTD",
    title: "DV AUTO REPAIRS LTD | Car & Van Repairs, Tyres & Servicing",
    description:
      "Professional car and van repair garage. Tyres, suspension, brakes, servicing, diagnostics and more.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <LanguageProvider>
          <div className="sticky top-0 z-50" data-sticky-header>
            <TopBar />
            <Header />
          </div>
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
