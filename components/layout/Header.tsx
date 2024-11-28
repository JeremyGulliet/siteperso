import ButtonCall from "@/components/ButtonCall";
import Image from "next/image";
import Link from "next/link";
import ResponsiveMenu from "./ResponsiveMenu";

interface NavItem {
  href: string;
  label: string;
}
const navBar: NavItem[] = [
  { href: "/#", label: "Accueil" },
  { href: "/#besoins", label: "Besoins" },
  { href: "/#about", label: "A propos" },
  { href: "/#réalisations", label: "Réalisations" },
  { href: "/#offres", label: "Offres" },
  { href: "/#FAQ", label: "FAQ" },
];

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-center border-b border-nebuleuse bg-gradient-to-r from-espace to-black py-6 text-white">
      <div className="flex w-full items-center justify-around">
        <Image
          src="/asset/Logo/Logo_provisoire_Jérémy_Gulliet-22.png"
          alt="logo"
          width={150}
          height={150}
          quality={75}
          priority={true}
          loading="eager"
          className="hidden h-auto w-auto max-w-[100px] md:block md:max-w-[125px] lg:max-w-[150px] xl:max-w-[175px]"
        />

        {/* Menu responsive visible en dessous de lg */}
        <div className="block lg:hidden">
          <ResponsiveMenu />
        </div>

        {/* Navigation classique visible à partir de lg */}
        <nav className="hidden lg:block">
          <ul className="flex items-center justify-center gap-4 lg:gap-8 xl:gap-12">
            {navBar.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-base font-bold text-white transition-all duration-150 ease-in-out hover:underline hover:opacity-50 lg:text-lg xl:text-xl"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <ButtonCall />
        </div>
      </div>
    </header>
  );
}