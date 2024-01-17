import "~/styles/globals.css";
import { TRPCReactProvider } from "~/trpc/react";
import { Footer, Navbar } from "../../_components/nav";
import { ThemeProvider } from "../../_components/theme-provider";


export const metadata = {
  title: "Probably",
  description: "An invite only community where investors can fund startups and founders can showcase their projects.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="">
        <TRPCReactProvider>
          <ThemeProvider
           attribute="class"
           defaultTheme="system"
           enableSystem
           disableTransitionOnChange
          >
            <Navbar/>
            {children}
            <Footer/>
          </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
