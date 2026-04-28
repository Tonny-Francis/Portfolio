import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Nav from "@/src/components/Nav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Tonny Sousa | Full Stack Developer",
  description: "Welcome to Tonny Sousa portfolio. Discover my projects, skills, and experience in web development, including React, Node.js, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <Head>
        <title>Tonny Sousa | Full Stack Developer</title>
        <meta name="description" content="Welcome to Tonny Sousa portfolio. Discover my projects, skills, and experience in web development, including React, Node.js, and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Tonny Sousa | Full Stack Developer" />
        <meta property="og:description" content="Welcome to Tonny Sousa portfolio. Discover my projects, skills, and experience in web development, including React, Node.js, and more." />
        <meta property="og:image" content="https://avatars.githubusercontent.com/u/81640351?s=400&u=97c2d3b69d6457903e6fc932adb1b2b2f309556a&v=4" />
        <meta property="og:url" content="https://tonnysousa.dev" />
        <meta property="og:type" content="website" />
      </Head>
      <body className="font-sans antialiased bg-bg text-fg">
        <Nav />
        {children}
      </body>
    </html>
  );
}
