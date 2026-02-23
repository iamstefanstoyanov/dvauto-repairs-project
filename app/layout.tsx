import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { LanguageProvider } from "@/context/LanguageContext";
import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Universal Lobby",
    /* default: "DVMI LTD | Car & Van Repairs, Tyres & Servicing", */
    template: "%s | DVMI LTD",
  },
  description:
    "DVMI LTD — professional car and van repair garage. Tyres, suspension, brakes, servicing, diagnostics and more. Quality work at fair prices.",
  keywords: [
    "car repair",
    "van repair",
    "tyres",
    "suspension",
    "brakes",
    "car servicing",
    "diagnostics",
    "garage",
    "DVMI",
  ],
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "DVMI LTD",
    title: "DVMI LTD | Car & Van Repairs, Tyres & Servicing",
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
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
