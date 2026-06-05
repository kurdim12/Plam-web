import type { Metadata } from "next";
import { Fraunces, Albert_Sans, Almarai } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/components/locale-provider";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const albert = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-albert",
  display: "swap",
});

const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["300", "400", "700", "800"],
  variable: "--font-almarai",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://palm-guard.vercel.app"),
  title: "Palm Guard — Early Acoustic Detection of Red Palm Weevil | بالم جارد",
  description:
    "Solar-powered acoustic AI that detects Red Palm Weevil 3–6 months before visible symptoms. 93% accuracy, 6–8 JOD per unit, built in Jordan.",
  keywords: [
    "Red Palm Weevil",
    "Palm Guard",
    "acoustic detection",
    "agritech",
    "Jordan",
    "date palm",
    "early warning",
  ],
  authors: [{ name: "Team Vcoders — University of Petra" }],
  openGraph: {
    title: "Palm Guard — Early Acoustic Detection of Red Palm Weevil",
    description:
      "Solar-powered acoustic AI that detects Red Palm Weevil 3–6 months before visible symptoms. 93% accuracy, 6–8 JOD per unit, built in Jordan.",
    type: "website",
    siteName: "Palm Guard",
    images: [
      {
        url: "/assets/render-light.jpg",
        width: 1200,
        height: 630,
        alt: "Palm Guard acoustic detection device mounted on a date palm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Palm Guard — Early Acoustic Detection of Red Palm Weevil",
    description:
      "Solar-powered acoustic AI that detects Red Palm Weevil 3–6 months before visible symptoms.",
    images: ["/assets/render-light.jpg"],
  },
  icons: { icon: "/assets/logo.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body
        className={`${fraunces.variable} ${albert.variable} ${almarai.variable} bg-paper text-ink antialiased`}
      >
        {/* Enable scroll-reveal only when JS runs (prevents hidden content for no-JS/SSR) */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
