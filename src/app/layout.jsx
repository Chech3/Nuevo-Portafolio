import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "./components/TransitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio Jose Garces",
  description: "Made with Next",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-blue-200 dark:bg-slate-600 duration-300 `  }>
        
       <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
