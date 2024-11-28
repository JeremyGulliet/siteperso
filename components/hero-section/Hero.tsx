import ButtonCall from "../ButtonCall";
import HeroReview from "./HeroReview";
import HeroTitle from "./HeroTitle";

export default function Hero() {
  return (
    <main className="flex flex-col items-center justify-center gap-8 py-6 md:gap-12 md:pb-8">
      <HeroTitle />
      <ButtonCall />
      <HeroReview />
    </main>
  );
}