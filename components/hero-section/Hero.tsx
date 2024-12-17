import { PurpleWaveDivider } from "../PurpleWaveDivider";
import HeroButton from "./heroButton";
import HeroReview from "./HeroReview";
import HeroTitle from "./HeroTitle";

export default function Hero() {
  return (
    <section className="relative">
      <main className="flex flex-col items-center justify-center gap-8 pb-16 pt-6 md:gap-12 ">
        <HeroTitle />
        <HeroButton />
        <HeroReview />
      </main>
      <PurpleWaveDivider />
    </section>
  );
}
