import "~/styles/globals.css";

import { inter } from "~/lib/fonts";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata = {
  title: "Probably | Home",
  description: "Desc tbd",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
