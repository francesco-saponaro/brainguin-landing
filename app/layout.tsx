import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["400", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

// 🚀 PREMIUM SEO CONFIGURATION
export const metadata: Metadata = {
  title: "BrainGuin | Study Smarter, Not Harder",
  description:
    "Upload any PDF, link, or topic and let BrainGuin's AI generate smart flashcards instantly. Hack your memory and ace your exams with just 5 minutes a day.",
  keywords: [
    "flashcards",
    "AI study app",
    "spaced repetition",
    "student tools",
    "exam prep",
    "BrainGuin",
  ],
  authors: [{ name: "BrainGuin" }],
  openGraph: {
    title: "BrainGuin | The Ultimate AI Study Assistant",
    description:
      "Convert infinite PDFs and links into interactive flashcards in seconds.",
    url: "https://brainguin.app",
    siteName: "BrainGuin",
    images: [
      {
        url: "https://brainguin.app/images/og-image.jpg", // Create a nice wide banner for this later!
        width: 1200,
        height: 630,
        alt: "BrainGuin App Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BrainGuin | Study Smarter, Not Harder",
    description: "Generate flashcards from any document using AI.",
    images: ["https://brainguin.app/images/og-image.jpg"],
  },
  themeColor: "#F97316",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} font-body bg-page text-text-main antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
