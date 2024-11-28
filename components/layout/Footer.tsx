import Image from "next/image";
import SocialLink from "../SocialLink";


export default function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-nebuleuse bg-gradient-to-r from-espace to-black py-6 text-white">
      <div className="flex w-full flex-col items-center justify-center gap-8 px-4 md:flex-row md:justify-around">
        <Image
          src="/asset/Logo/Logo_provisoire_Jérémy_Gulliet-22.png"
          alt="logo"
          width={150}
          height={150}
          quality={75}
          priority={true}
          loading="eager"
          className="hidden h-auto md:block md:w-[150px]"
        />
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <p className="text-lg font-bold text-white md:text-xl">
            © {new Date().getFullYear()} - Jérémy GULLIET
          </p>
          <p className="text-sm text-white md:text-base">
            Créateur de sites web & landing page
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:gap-4">
          <p className="text-base font-bold text-white md:text-lg">Contact:</p>
          <SocialLink />
        </div>
      </div>
    </footer>
  );
}
