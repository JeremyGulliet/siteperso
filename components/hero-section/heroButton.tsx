import Link from "next/link";

export default function HeroButton() {
  return (
    <Link
      href="https://cal.com/jeremy-gulliet/rendez-vous-decouverte"
      target="_blank"
      className="xs:h-10 xs:px-4 inline-flex h-8 animate-shimmer items-center justify-center rounded-full bg-[linear-gradient(110deg,#572c9b,45%,#a179e0,55%,#572c9b)] bg-[length:200%_100%] px-3 font-bold ring-1 ring-purple transition-colors ease-in-out hover:scale-105 active:scale-95 sm:h-12 sm:px-6 md:h-14 md:px-8"
    >
      <text className="xs:text-lg whitespace-nowrap text-base text-white sm:text-xl md:text-2xl">
        💡 Je démarre mon projet maintenant
      </text>
    </Link>
  );
}
