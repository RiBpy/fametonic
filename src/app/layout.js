import "./globals.css";
import { Figtree, Urbanist } from "next/font/google";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});

export const metadata = {
  title: "Fametonic - Turn Social Media Into a Profitable Career",
  description:
    "Discover your way to success with Fametonic. Start growing your influence, create viral content, and learn from expert-led courses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${figtree.variable} ${urbanist.variable}`}>
      <body >{children}</body>
    </html>
  );
}
