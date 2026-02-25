import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dyala Muhammad Panahpertama | Full Stack Web Developer",
  description: "Full Stack Web Developer with experience in Laravel, Next.js, Express.js, and PostgreSQL. Building scalable, responsive, and user-focused web applications.",
  openGraph: {
    title: "Dyala Muhammad Panahpertama | Full Stack Web Developer",
    description: "Full Stack Web Developer building scalable and user-focused web applications.",
    url: "https://portofolio-netxjs.vercel.app/", // Ganti dengan domain asli kamu
    siteName: "Dyala Portfolio",
    images: [
      {
        url: "/images/og-image.jpg", // Letakkan file gambar di folder /public
        width: 1200,
        height: 630,
        alt: "Dyala Muhammad Panahpertama Portfolio Preview",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
