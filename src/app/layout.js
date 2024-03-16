import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MailBox",
  description: "Mailbooth innovation that has the potential to change the world!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
			<body>
				<div className="root w-full h-full relative flex justify-center bg-white">
					<Navbar />

					{children}
				</div>

        <Footer />
			</body>
		</html>
  );
}
