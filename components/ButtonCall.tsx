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
      className="relative inline-flex h-10 overflow-hidden rounded-full p-px hover:scale-105 sm:h-12"
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex size-full cursor-pointer items-center justify-center gap-2 rounded-full bg-nebuleuse px-2 py-1 text-base font-bold text-white backdrop-blur-3xl sm:gap-4 sm:px-3 sm:text-lg">
        <FaPhone className="text-sm sm:text-base" />
        Réserve ton appel
      </span>
    </Link>
  );
}
