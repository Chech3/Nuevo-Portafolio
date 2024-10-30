import chat from "@public/chat.png"
import canvas from "@public/canvas.png"
import scriptPython from "@public/scriptPython.png"
import BlackJack from "@public/black-jack.png"
import firefox from "@public/firefox.png"

export const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300 dark:from-indigo-500 dark:via-indigo-500 dark:to-purple-500",
    title: "Chat",
    desc: "Chat made with React, Node, SocketIO, JavaScript and Tailwind ",
    img: chat,
    link: "https://github.com/Chech3/chatNodeReact",
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
    title: "Script Python",
    desc: "Python script made to take the first capture detected in a camera within the RTCP protocol. Made with Python and FastApi",
    img: scriptPython,
    link: "https://github.com/Chech3/ss_python_script/tree/main",
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
    color: "from-red-300 to-blue-300 dark:from-purple-500 dark:via-indigo-500 dark:to-blue-500",
    title: "Firefox Clon",
    desc: "Firefox clon made with Tailwind ",
    img: firefox,
    link: "https://clon-firefox.vercel.app/",
  }
];


