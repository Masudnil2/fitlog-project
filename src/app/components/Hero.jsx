import { ArrowDown } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 lg:grid-cols-2">
      
      <div>
        <p className="text-sm font-bold tracking-[0.2em] text-lime-400">
          WORKOUT LIBRARY
        </p>

        <h1 className="mt-5 text-6xl font-black leading-none text-white">
          TRAIN WITH INTENT.
          <br />
          <span className="text-lime-400">
            LOG EVERY SET.
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-zinc-400">
          FitLog is a dark, no-nonsense gym companion:
          pick a lift, lock it into today&apos;s plan,
          and watch the week&apos; work add up.
        </p>

        <a
          href="#library"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-lime-400 px-5 py-3 font-bold text-black"
        >
          <ArrowDown size={18} />
          BROWSE WORKOUTS
        </a>
      </div>

      <div>
        <Image
          src="/banner.png"
          alt="Workout"
          className="mx-auto max-w-md"
        />
      </div>

    </section>
  );
};

export default Hero;