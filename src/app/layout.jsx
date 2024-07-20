import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "./components/TransitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.className}`}>
       <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
