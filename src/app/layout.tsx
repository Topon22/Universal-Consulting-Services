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
  openGraph: {
    title: "Universal Consulting Services Group | Study in the USA",
    description:
      "Your trusted partner for U.S. education — affordable colleges, CPT/OPT, scholarships, and visa support for international students.",
    siteName: "Universal Consulting Services Group",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Universal Consulting Services Group | Study in the USA",
    description:
      "Your trusted partner for U.S. education — affordable colleges, CPT/OPT, scholarships, and visa support.",
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
