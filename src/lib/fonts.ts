import {Ubuntu, Inter} from "next/font/google"

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
  });

const ubuntu = Ubuntu({
    subsets: ["latin"],
    variable: "--font-sans",
    weight: "500"
});


export {ubuntu, inter}