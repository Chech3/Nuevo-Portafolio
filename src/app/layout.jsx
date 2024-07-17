import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "cositas",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
      <div className="min-h-full min-w-full dark:bg-slate-600 bg-blue-100 flex flex-col">
          <div className="h-24">
            <NavBar />
          </div>
          {/* <div className="h-[calc(100vh-6rem)]">{children}</div> */}
          <div className="sm:flex-grow md:h-[calc(130vh-6rem)] lg:h-[calc(100vh-6rem)] xl:h-[calc(100vh-6rem)] ">
        {children}
      </div>
        </div>
      </body>
    </html>
  );
}
