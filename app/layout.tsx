import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Script from "next/script";

const karla = Karla({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jeremygulliet.fr/"),
  title: "Jérémy GULLIET - Développement Web & Création de Sites Internet",
  description:
    "Expert en création de sites web et landing pages sur-mesure. Développement web professionnel, responsive design et accompagnement personnalisé de A à Z.",
  icons: {
    icon: "/asset/Logo/Logo_provisoire_Jérémy_Gulliet-22.png",
  },
  keywords: [
    // Technologies
    "développement web",
    "création site internet",
    "site web sur mesure",
    "landing page",
    "site vitrine",
    "responsive design",
    "site mobile",
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Next.js",

    // Services
    "création site web professionnel",
    "développeur web freelance",
    "intégration web",
    "webdesign",
    "UI/UX design",
    "maquette web",
    "refonte site internet",
    "maintenance site web",

    // SEO & Performance
    "site web performant",
    "optimisation SEO",
    "référencement naturel",
    "site web rapide",
    "web design moderne",
    "expérience utilisateur",

    // Géolocalisation
    "développeur web France",
    "création site internet France",

    // Spécificités
    "accompagnement personnalisé",
    "projet web sur mesure",
    "site internet professionnel",
    "développement sur mesure",
  ],
  openGraph: {
    title:
      "Jérémy GULLIET | Développeur Web - Création de Sites Internet Sur-Mesure",
    description:
      "Expert en création de sites web et landing pages. Je développe votre présence en ligne avec des solutions web professionnelles et personnalisées.",
    url: "https://www.jeremygulliet.fr/",
    images: [
      {
        url: "/asset/Images/Logo_provisoire_Jérémy_Gulliet-23.png",
        width: 1200,
        height: 630,
        alt: "Jérémy GULLIET - Développeur Web",
      },
    ],
    siteName: "Jérémy GULLIET - Développement Web & Création de Sites Internet",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jérémy GULLIET | Développeur Web Freelance",
    description:
      "Création de sites web et landing pages sur-mesure. Solutions web professionnelles et accompagnement personnalisé.",
    images: [
      {
        url: "/asset/Images/Logo_provisoire_Jérémy_Gulliet-23.png",
        width: 1200,
        height: 630,
        alt: "Jérémy GULLIET - Développeur Web",
      },
    ],
    creator: "@JeremyGulliet",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.jeremygulliet.fr/",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MN76QMBG');`}
        </Script>
        {/* End Google Tag Manager */}
      </head>
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
