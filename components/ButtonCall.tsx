import Link from "next/link";
import { FaPhone } from "react-icons/fa";

interface ButtonCallProps {
  bgColor?: string;
}

export default function ButtonCall({
  bgColor = "bg-nebuleuse",
}: ButtonCallProps) {
  return (
    <Link
      href="https://cal.com/jeremy-gulliet/rendez-vous-decouverte"
      target="_blank"
      className={`flex scale-100 items-center justify-center gap-2 rounded-2xl ${bgColor} px-4 py-2 font-bold text-white hover:bg-opacity-80 md:scale-105 lg:scale-110`}
    >
      <FaPhone />
      <p className="text-base">Je réserve mon appel</p>
    </Link>
  );
}
