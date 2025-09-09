import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Dulaj Upananda - Full Stack Developer & UI/UX Designer",
  description: "Personal portfolio of Dulaj Upananda, a passionate full-stack developer and UI/UX designer creating beautiful, functional, and user-centered digital experiences.",
  keywords: ["Dulaj Upananda", "Full Stack Developer", "UI/UX Designer", "React", "Next.js", "TypeScript", "Portfolio"],
  authors: [{ name: "Dulaj Upananda" }],
  creator: "Dulaj Upananda",
  openGraph: {
    title: "Dulaj Upananda - Full Stack Developer & UI/UX Designer",
    description: "Personal portfolio showcasing projects, skills, and experience in full-stack development and UI/UX design.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulaj Upananda - Full Stack Developer & UI/UX Designer",
    description: "Personal portfolio showcasing projects, skills, and experience in full-stack development and UI/UX design.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
