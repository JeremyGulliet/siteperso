/* eslint-disable react/no-unescaped-entities */
export default function HeroTitle() {
  return (
    <div
      className="flex flex-col items-center justify-center px-4 pt-2 md:px-0 lg:pt-10"
    >
      <h1 className="text-center text-[32px] font-extrabold leading-tight text-purple md:hidden">
        Montre qui tu es vraiment et <br />
        <span className="rounded-2xl bg-nebuleuse px-2 py-1 text-white">
          attire plus de clients.
        </span>
      </h1>
      <h1 className="hidden text-center font-extrabold text-purple md:block md:text-5xl md:leading-snug lg:text-6xl">
        Montre qui tu es vraiment <br />
        et{" "}
        <span className="rounded-2xl bg-nebuleuse px-2 py-1 text-white md:leading-relaxed">
          attire plus de clients.
        </span>
      </h1>

      <h2 className="w-full pt-4 text-center text-lg font-bold text-white md:w-9/12 md:text-2xl lg:w-7/12 lg:text-3xl">
        Je t'accompagne de A à Z pour créer un site ou une landing page à ton
        image.
      </h2>
      <h3 className="lg:text2xl pt-8 text-center text-lg font-medium text-white md:text-2xl">
        Prêt à faire décoller ton activité ? 🚀
      </h3>
    </div>
  );
}
