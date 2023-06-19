import Header from "@/components/Header";
import "./globals.css";

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
      <body className="bg-themeGrey200">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
