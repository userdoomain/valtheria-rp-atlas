import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";

const display = Cinzel({ variable: "--font-display", subsets: ["latin"] });
const body = Inter({ variable: "--font-body", subsets: ["latin"] });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const basePath = process.env.GITHUB_ACTIONS ? "/valtheria-rp-atlas" : "";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Atlas de Raças & Classes | Valtheria RP",
  description: "Guia pesquisável em português das raças, Origins e classes do Valtheria RP.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Atlas de Raças & Classes | Valtheria RP",
    description: "Descubra e pesquise as raças, Origins, classes e poderes do modpack.",
    locale: "pt_BR",
    type: "website",
    images: [{ url: `${basePath}/valtheria-atlas-social.png`, width: 1728, height: 909 }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
