import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const calSans = localFont({
  src: "../public/fonts/CalSans-SemiBold.woff2",
  variable: "--font-cal",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Bhavik Sadiwala — Staff Android Engineer & AI Agent Developer",
  description:
    "Staff Engineer with 14 years building Android apps. Now building AI agents, LLM mobile features and automation workflows for global teams.",
  openGraph: {
    title: "Bhavik Sadiwala — Staff Android Engineer & AI Agent Developer",
    description:
      "Staff Engineer with 14 years building Android apps. Now building AI agents, LLM mobile features and automation workflows for global teams.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhavik Sadiwala — Staff Android Engineer & AI Agent Developer",
    description:
      "Staff Engineer with 14 years building Android apps. Now building AI agents, LLM mobile features and automation workflows for global teams.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${calSans.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
