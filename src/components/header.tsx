"use client";

import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  const solicialLinks = [
    {
      href: "https://x.com/thetickerisDINO",
      src: "/img/twitter.svg",
      alt: "imagem twitter",
    },
    {
      href: "https://t.me/thetickerisDINO",
      src: "/img/telegram.svg",
      alt: "imagem telegram",
    },
  ];

  return (
    <header className={cn("fixed lg:mt-5 px-4 z-30 h-[72px] w-full")}>
      <div className="max-w-[1330px] w-full h-full flex mx-auto justify-between items-center">
        <Link href={"/"}>
          <Image
            className="z-20 relative"
            src="/img/dino.png"
            width={160}
            height={80}
            alt="logo"
          />
        </Link>

        <div className="hidden lg:flex items-center space-x-2">
          {solicialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.alt}
            >
              <Image
                width={22}
                height={22}
                className="hover:opacity-80 transition-all"
                src={link.src}
                alt={link.alt}
              />
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
