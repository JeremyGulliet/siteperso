import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const karla = Karla({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jérémy GULLIET - Un site à votre image.",
  description: "Je réalise un site web ou une landing page à votre image.",
  icons: {
    icon: "/asset/Logo/Logo_provisoire_Jérémy_Gulliet-22.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${karla.className} antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1 bg-gradient-to-r from-espace to-black pt-24">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
