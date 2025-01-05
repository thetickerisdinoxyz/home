/* eslint-disable @next/next/no-img-element */
import { Metadata } from "next";
import React from "react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "DINO",
  description: "AI agent, launch any token to pump fun with just a click",
  openGraph: {
    title: "DINO | Home",
    description: "AI agent, launch any token to pump fun with just a click",
    url: "https://www.thetickerisdino.xyz",
    siteName: "DINO",
    images: [
      {
        url: "/img/dino.png",
        width: 800,
        height: 500,
      },
    ],
    type: "website",
  },
  twitter: {
    title: "DINO | Home",
    description: "AI agent, launch any token to pump fun with just a click",
    images: "/img/dino.png",
    card: "summary_large_image",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  alternates: {
    canonical: "https://www.thetickerisdino.xyz",
  },
};

const Home: React.FC = () => {
  return (
    <div className={`flex flex-col overflow-hidden relative min-h-screen`}>
      <img
        src="/img/bg.png"
        alt="DINO"
        className="absolute w-full h-full object-cover z-0"
      />

      <div className="flex flex-col items-center justify-center h-screen z-10 px-4">
        <Image
          src="/img/dino.png"
          alt="DINO"
          width={450}
          height={120}
          className="mb-4 w-[300px] sm:w-[350px] md:w-[450px] h-auto"
        />

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
          <button className="bg-[#bc6bef] text-white text-base sm:text-lg font-bold font-dinosaur px-4 py-2 rounded-md hover:bg-[#bc6bef]/50 transition-all duration-300 cursor-not-allowed">
            launchpad
          </button>

          <button className="bg-[#bc6bef] text-white text-base sm:text-lg font-bold font-dinosaur px-4 py-2 rounded-md hover:bg-[#bc6bef]/50 transition-all duration-300 cursor-not-allowed">
            stake
          </button>
        </div>

        <span className="text-white font-bold font-dinosaur mt-6 text-[11px] sm:text-base text-center px-4">
          CA: 6emXcRyyPTVJCgzMXwVdqYUtnbB7BkLGYutZWQMNpump
        </span>
      </div>
    </div>
  );
};

export default Home;
