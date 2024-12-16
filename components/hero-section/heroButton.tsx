import Link from "next/link";

export default function HeroButton() {
  return (
    <Link
      href="https://cal.com/jeremy-gulliet/rendez-vous-decouverte"
      target="_blank"
      className="inline-flex h-10 animate-shimmer items-center justify-center rounded-full bg-[linear-gradient(110deg,#572c9b,45%,#a179e0,55%,#572c9b)] bg-[length:200%_100%] px-4 font-bold ring-1 ring-purple transition-colors hover:scale-105 sm:h-12 sm:px-6"
    >
      <text className="text-lg text-white sm:text-xl">
        💡 Je démarre mon projet maintenant
      </text>
    </Link>
  );
}
