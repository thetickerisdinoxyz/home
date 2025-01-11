/* eslint-disable @next/next/no-img-element */
import { Metadata } from "next";
import React from "react";

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
      <div className="bg-[#2D1C71] flex z-10 py-3 px-2 lg:px-10 border-b-2 border-[#FAD12A]">
        <span className="text-white font-dinosaur text-[11px] lg:text-xs">
          Contract: 6emXcRyyPTVJCgzMXwVdqYUtnbB7BkLGYutZWQMNpump
        </span>
      </div>

      <img
        src="/img/bg.png"
        alt="DINO"
        className="absolute w-full h-full object-cover z-0"
      />

      <nav className="flex max-w-[1330px] w-full h-full mx-auto justify-between items-center px-6 py-4 z-10">
        <div className="flex items-center gap-2">
          <img src="/img/dino.png" alt="DINO Logo" className="h-8 lg:h-16" />
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://jup.ag/swap/SOL-6emXcRyyPTVJCgzMXwVdqYUtnbB7BkLGYutZWQMNpump"
            target="_blank"
            className="bg-white text-[#2D1C71] font-dinosaur text-sm lg:text-base px-6 py-2 rounded-full hover:bg-white/90"
          >
            BUY $DINO
          </a>
        </div>
      </nav>

      <div className="flex flex-col items-center justify-center flex-grow z-10 px-4 pt-8 lg:pt-0">
        <span className="text-[#2D1C71] border-2 border-[#2D1C71] font-dinosaur bg-white justify-center items-center text-sm lg:text-base flex px-4 lg:px-20 pt-2.5 pb-1.5 rounded-full mb-6">
          The friendliest dino on Solana :)
        </span>

        <span
          className="text-4xl lg:text-7xl text-white break-all block text-center"
          style={{
            textShadow: `
            -3px -3px 0 #2D1C71,  
            3px -3px 0 #2D1C71,
            -3px 3px 0 #2D1C71,
            3px 3px 0 #2D1C71
          `,
          }}
        >
          Launch Your
        </span>

        <span
          className="text-4xl lg:text-7xl text-white break-all block mt-3 lg:mt-7 text-center"
          style={{
            textShadow: `
            -3px -3px 0 #2D1C71,  
            3px -3px 0 #2D1C71,
            -3px 3px 0 #2D1C71,
            3px 3px 0 #2D1C71
          `,
          }}
        >
          memecoin Using AI.
        </span>

        <button className="flex items-center gap-2 bg-white text-[#2D1C71] text-sm font-dinosaur px-8 py-3 rounded-full mt-8 shadow-lg shadow-[#2D1C71] hover:bg-white/70 transition-all duration-300">
          <img src="/img/stars.png" alt="stars" className="w-6 h-6" />
          <span className="text-[#2D1C71]">GENERATE A TOKEN</span>
        </button>

        <div className="flex flex-col items-center gap-8 z-10 pb-16 w-full lg:w-9/12 mt-10">
          <div className="flex items-center justify-center lg:h-40 lg:flex-row flex-col">
            <div className="flex flex-col bg-[#1A103F] rounded-[40px] p-8 w-full lg:w-6/12 mx-4 lg:h-full border border-[#A797E7]">
              <div className="flex justify-between items-center">
                <h3 className="text-white font-dinosaur text-lg lg:text-2xl">
                  STAKE $DINO SOON
                </h3>
              </div>
              <p className="text-[#AFA1EC] font-dinosaur text-xs lg:text-sm mt-2 pr-10">
                BECAUSE EVEN DINOSAURS NEED PASSIVE INCOME. RELAX, YOUR TOKENS
                ARE WORKING HARDER THAN YOU! 🦖
              </p>
            </div>

            <a
              href="https://x.com/dannpl/status/1875190724129681530"
              target="_blank"
              className="bg-white rounded-[40px] px-6 p-4 overflow-hidden w-full mt-4 lg:mt-0 lg:w-6/12 mx-4 lg:h-full border border-[#A797E7]"
            >
              <img
                src="/img/dannpl.png"
                alt="tweet"
                className="w-full h-full object-contain"
              />
            </a>
          </div>

          <div className="flex w-full lg:flex-row flex-col gap-4 justify-center items-center">
            <a
              href="https://x.com/thetickerisDINO"
              target="_blank"
              className="flex w-6/12 lg:w-2/12 flex-col py-6 items-center justify-center gap-2 bg-black rounded-3xl hover:opacity-70 transition-opacity"
            >
              <img src="/img/twitter.png" alt="Twitter" className="w-8 h-8" />
              <span className="text-white font-dinosaur block mt-2">
                TWITTER
              </span>
            </a>
            <a
              href="https://t.me/thetickerisDINO"
              target="_blank"
              className="flex w-6/12 lg:w-2/12 flex-col py-6 items-center justify-center gap-2 bg-[#229ED9] rounded-3xl hover:opacity-70 transition-opacity"
            >
              <img
                src="/img/telegram.png"
                alt="Telegram"
                className="w-12 h-12"
              />
              <span className="text-white font-dinosaur block">TELEGRAM</span>
            </a>
            <a
              href="https://v1.birdeye.so/token/6emXcRyyPTVJCgzMXwVdqYUtnbB7BkLGYutZWQMNpump?chain=solana"
              target="_blank"
              className="flex w-6/12 lg:w-2/12 flex-col py-6 items-center justify-center gap-2 bg-[#FFE7E0] rounded-3xl hover:opacity-70 transition-opacity"
            >
              <img src="/img/birdeye.png" alt="Birdeye" className="w-12 h-12" />
              <span className="text-[#FF3B30] font-dinosaur block">
                BIRDEYE
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
