import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Providers } from "@/components/providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.universalconsultingservices.com"),
  title: "Universal Consulting Services Group | Study in the USA with Confidence",
  description:
    "UCSG guides international students to affordable, well-ranked U.S. colleges with CPT/OPT, hybrid programs, scholarships, and full visa & immigration support. Founded by a U.S. Army veteran in 2022.",
  keywords: [
    "study in USA",
    "international students",
    "CPT",
    "OPT",
    "college transfer",
    "scholarships",
    "F1 visa",
    "pathway programs",
    "Universal Consulting Services",
    "UCSG",
  ],
  authors: [{ name: "Universal Consulting Services Group" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Universal Consulting Services Group | Study in the USA",
    description:
      "Your trusted partner for U.S. education — affordable colleges, CPT/OPT, scholarships, and visa support for international students.",
    siteName: "Universal Consulting Services Group",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Universal Consulting Services Group" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Universal Consulting Services Group | Study in the USA",
    description:
      "Your trusted partner for U.S. education — affordable colleges, CPT/OPT, scholarships, and visa support.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-background text-foreground`}
      >
        <Providers>
          {children}
          <Toaster position="bottom-right" />
        </Providers>
      </body>
    </html>
  );
}
