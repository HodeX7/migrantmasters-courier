import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "@/redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MailBox",
  description:
    "Mailbooth innovation that has the potential to change the world!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="root w-fit h-full relative flex flex-col justify-center bg-background">
          <Navbar />
          <Providers>{children}</Providers>
          <Footer />
        </div>
      </body>
    </html>
  );
}
