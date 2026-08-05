import rifa from "@public/rifa.png"
import canvas from "@public/canvas.png"
import isabel from "@public/isabel.png"
import BlackJack from "@public/black-jack.png"
import firefox from "@public/firefox.png"
import telemed from "@public/telemed.png"

export const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300 dark:from-indigo-500 dark:via-indigo-500 dark:to-purple-500",
    title: "Lottery",
    desc: "Lottery game made with Next, Nest, TypeScript and Tailwind. Only frontend ",
    img: rifa,
    link: "https://rifafronted.vercel.app/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300 dark:from-purple-500 dark:via-indigo-500 dark:to-purple-500",
    title: "Canvas to paint",
    desc: "Canvas made in react together with some Material UI components and the FabricJs library.",
    img: canvas,
    link: "https://paint-clon.vercel.app/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300 dark:from-purple-500 dark:via-indigo-500 dark:to-purple-500",
    title: "Isabel | Nail Atelier",
    desc: "Web application designed for booking and managing premium nail care appointments with online scheduling and WhatsApp integration.",
    img: isabel,
    link: "https://isabel-sistema.onrender.com/",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300 dark:from-purple-500 dark:via-indigo-500 dark:to-purple-500",
    title: "BlackJack",
    desc: "Blackjack game made with HTML, CSS and JavaScript. It is played against the computer and the first to be 21 wins",
    img: BlackJack,
    link: "https://blackjack-two-gules.vercel.app/",
  },
  {
    id: 5,
    color: "from-red-300 to-purple-300 dark:from-purple-500 dark:via-indigo-500 dark:to-purple-500",
    title: "Firefox Clon",
    desc: "Firefox clone built using Tailwind CSS, designed to replicate the sleek and modern user interface of the popular web browser.",
    img: firefox,
    link: "https://clon-firefox.vercel.app/",
  },
  {
    id: 6,
    color: "from-purple-300 to-red-300 dark:from-purple-500 dark:via-indigo-500 dark:to-purple-500",
    title: "Website Telemed",
    desc: "This page was the result of my work with my colleagues in the no country simulation",
    img: telemed,
    link: "https://telemed-beta-nine.vercel.app/",
  },
];
