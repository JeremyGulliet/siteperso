"use client";

import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Link from "next/link";
import { useState } from "react";
import ButtonCall from "@/components/ButtonCall";
import Image from "next/image";
import { BsMenuButtonWideFill, BsPerson } from "react-icons/bs";
import {
  AiOutlineHome,
  AiOutlineQuestionCircle,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { MdOutlineAssignment, MdOutlineLocalOffer } from "react-icons/md";

interface menuItems {
  href: string;
  label: string;
  icon?: JSX.Element;
}
const menuItems = [
  { href: "/", label: "Découvrir", icon: <AiOutlineHome /> },
  {
    href: "/#accompagnement",
    label: "Accompagnement",
    icon: <MdOutlineAssignment />,
  },
  {
    href: "/#réalisations",
    label: "Réalisations",
    icon: <AiOutlineFundProjectionScreen />,
  },
  { href: "/#offres", label: "Offres", icon: <MdOutlineLocalOffer /> },
  { href: "/#about", label: "A propos", icon: <BsPerson /> },
  { href: "/#FAQ", label: "FAQ", icon: <AiOutlineQuestionCircle /> },
];

export default function ResponsiveMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>
        <BsMenuButtonWideFill
          className="h-8 w-6"
          color="#a179e0"
          onClick={() => setIsOpen(true)}
          aria-label="Menu"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="bg-gradient-to-r from-espace to-black"
      >
        <ul className="mt-4 flex flex-col gap-4">
          {menuItems.map(({ href, label, icon }) => (
            <li key={href} className="border-b border-purple pb-3 text-white">
              <Link href={href} onClick={closeMenu}>
                <div className="flex items-center justify-start gap-3">
                  {icon}
                  <p>{label}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-center pt-10">
          <ButtonCall />
        </div>
        <div className="flex items-center justify-center pt-10">
          <Image
            src="/asset/Logo/Logo_provisoire_Jérémy_Gulliet-22.png"
            alt="logo"
            width={150}
            height={150}
            quality={75}
            priority={true}
            loading="eager"
            className="size-auto"
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}
