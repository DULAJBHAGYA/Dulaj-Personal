import type { Metadata } from "next";
import { Poppins, Figtree } from "next/font/google";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
});

const blanka = localFont({
  src: [
    {
      path: "../assets/fonts/Blanka-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-blanka",
});

export const metadata: Metadata = {
  title: "Dulaj Personal",
  description: "Personal portfolio of Dulaj Upananda, a passionate full-stack developer and UI/UX designer creating beautiful, functional, and user-centered digital experiences.",
  keywords: ["Dulaj Upananda", "Full Stack Developer", "UI/UX Designer", "React", "Next.js", "TypeScript", "Portfolio"],
  authors: [{ name: "Dulaj Upananda" }],
  creator: "Dulaj Upananda",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: "Dulaj Personal",
    description: "Personal portfolio showcasing projects, skills, and experience in full-stack development and UI/UX design.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulaj Personal",
    description: "Personal portfolio showcasing projects, skills, and experience in full-stack development and UI/UX design.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${figtree.variable} ${blanka.variable} font-sans antialiased`}
        suppressHydrationWarning={true}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
