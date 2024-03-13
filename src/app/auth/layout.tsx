import "~/styles/globals.css";
import { TRPCReactProvider } from "~/trpc/react";
import { ThemeProvider } from "~/_components/theme-provider";
import { Toaster } from 'sonner'
import { GridGradient } from "~/_components/bg-comps";


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
      <body className="overflow-hidden">
        <TRPCReactProvider>
            <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            >
              <Toaster richColors position="top-center"/>
              {/* <div className="flex h-screen w-screen justify-center mt-[calc(30vh)]"> */}
              {/* <GridGradient/> */}
              {children}
              {/* </div> */}
            </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
