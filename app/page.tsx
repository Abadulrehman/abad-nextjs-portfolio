import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

import { FiExternalLink } from "react-icons/fi";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">

      <div className="my-auto">
        <div className="hidden w-screen h-px mb-4 animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

        <h1 className="z-10 text-[13vw] text-transparent text-center duration-1000 animate-title bg-white cursor-default text-edge-outline font-display whitespace-nowrap bg-clip-text ">
          abadulrehman
        </h1>

        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      </div>

      <div className="text-xs sm:text-sm md:text-lg w-full my-16 text-center animate-fade-in">
        <h2 className="text-zinc-500 px-8 md:px-24">
          I am a fledgling full-stack developer, with an interest in UI/UX
          design
        </h2>

        <div className="flex text-white justify-center gap-4 mt-2">
          <Link href="mailto:contact@abadulrehman.com" className="flex gap-1">
            Email <FiExternalLink />
          </Link>
          <Link
            href="https://linkedin.com/in/abadulrehman"
            target="_blank"
            className="flex gap-1"
          >
            LinkedIn <FiExternalLink />
          </Link>
          <Link
            href="https://github.com/abadulrehman"
            target="_blank"
            className="flex gap-1"
          >
            Github <FiExternalLink />
          </Link>
        </div>
      </div>

      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
    </div>
  );
}
