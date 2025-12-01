import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from 'next-themes'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nou Camp Anime Art",
  description: "Nou Camp Anime Art",
  openGraph: {
    title: "Nou Camp Anime Art",
    description: "Nou Camp Anime Art",
    url: "https://nou-camp-anime-art.vercel.app/",
    siteName: "Nou Camp Anime Art",
    images: [
      {
        url: "https://nou-camp-anime-art.vercel.app/logo.png",
        width: 1200,
        height: 630,
        alt: "Nou Camp Anime Art"
      }
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nou Camp Anime Art",
    description: "Nou Camp Anime Art",
    images: ["https://nou-camp-anime-art.vercel.app/logo.png"],
  },
  icons: {
    icon: "/favicon-new.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}