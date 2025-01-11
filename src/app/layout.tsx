import { Suspense } from "react";
import "../styles/globals.scss";

export const metadata = {
  title: "DINO",
  description: "AI agent, launch any token to pump fun with just a click",
  icons: [
    {
      url: "/favicon/favicon.ico",
      href: "/favicon//favicon.ico",
      sizes: "32x32",
      type: "image/x-icon",
    },
    {
      url: "/favicon/apple-touch-icon.png",
      href: "/favicon/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
    {
      url: "/favicon/favicon-32x32.png",
      href: "/favicon/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png",
    },
    {
      url: "/favicon/favicon-16x16.png",
      href: "/favicon/favicon-16x16.png",
      sizes: "16x16",
      type: "image/png",
    },
    {
      url: "/favicon/site.webmanifest",
      href: "/favicon/site.webmanifest",
      rel: "manifest",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={false}>
        <Suspense>{children}</Suspense>
      </body>
    </html>
  );
}
