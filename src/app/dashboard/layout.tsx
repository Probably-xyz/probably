import "~/styles/globals.css";
import { TRPCReactProvider } from "~/trpc/react";
import { ThemeProvider } from "~/_components/theme-provider";
import { ubuntu } from "~/lib/fonts";
import Link from "next/link";
import { SideBar, UserAvatar } from "~/_components/dashboard";
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
            
        <div className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
            <SideBar/>
              <main className="flex flex-col p-8 space-y-8 max-w-screen-2xl">
                {children}
              </main>
        </div>

            </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
