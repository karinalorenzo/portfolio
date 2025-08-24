import "./styles/globals.css";
import {
  Geist,
  Geist_Mono,
  Averia_Serif_Libre,
  Bad_Script,
} from "next/font/google";

import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});
const averia = Averia_Serif_Libre({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-averia",
});

const badScript = Bad_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bad-script",
});

export const metadata = {
  title: "Karina L.",
  description: "Created with love",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${averia.variable} ${badScript.variable} antialiased`}
      >
        <div className="relative min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
