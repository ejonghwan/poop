import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";


const JetBrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600" ,"700", "800"],
  variable: '--font-jetbrainsMono'
});

export const metadata: Metadata = {
  title: "ttt",
  description: "tttt",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={JetBrainsMono.variable}>{children}</body>
    </html>
  );
}
