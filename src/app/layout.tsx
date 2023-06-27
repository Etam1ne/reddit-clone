import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["cyrillic", "latin"] });

export const metadata = {
  title: "Reddit clone",
  description: "Definitely not a clone of Reddit",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={"bg-themeGrey200 " + inter.className}>
        <Header />
        <main className="flex w-full justify-center">{children}</main>
      </body>
    </html>
  );
}
