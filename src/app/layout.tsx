import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/components/auth-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PintarDagang - Super App Ekonomi Kreatif",
  description: "Platform terintegrasi untuk Jual Beli, Edukasi, dan Filantropi. Wujudkan potensi Anda dalam satu ekosistem digital.",
  keywords: ["PintarDagang", "Marketplace", "Edukasi", "Donasi", "UMKM", "Online Learning", "Filantropi"],
  authors: [{ name: "PintarDagang Team" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "PintarDagang - Super App Ekonomi Kreatif",
    description: "Platform terintegrasi untuk Jual Beli, Edukasi, dan Filantropi",
    url: "https://pintardagang.com",
    siteName: "PintarDagang",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PintarDagang - Super App Ekonomi Kreatif",
    description: "Platform terintegrasi untuk Jual Beli, Edukasi, dan Filantropi",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <AuthProvider>
          {children}
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
