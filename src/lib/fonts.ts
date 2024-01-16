import {Ubuntu, Inter} from "next/font/google"

const inter = Inter({
    subsets: ["latin"],
  });

const ubuntu = Ubuntu({
    subsets: ["latin"],
    weight: "500"
});


export {ubuntu, inter}