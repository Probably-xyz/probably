import "~/styles/globals.css";
import { TRPCReactProvider } from "~/trpc/react";
import { Navbar } from "./_components/nav";

export const metadata = {
  title: "Probably | Home",
  description: "An invite only community where investors can fund startups and founders can showcase their projects.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-hidden">
        <TRPCReactProvider>
          <Navbar/>
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
