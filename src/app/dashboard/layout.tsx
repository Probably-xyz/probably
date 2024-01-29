import "~/styles/globals.css";
import { TRPCReactProvider } from "~/trpc/react";
import { ThemeProvider } from "~/_components/theme-provider";
import { SideBar } from "~/_components/dashboard";
import { Toaster } from "sonner";
import { getServerAuthSession } from "~/server/auth";
import { redirect } from "next/navigation";
import { Suspense } from "react";



export const metadata = {
  title: "Probably",
  description: "An invite only community where investors can fund startups and founders can showcase their projects.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerAuthSession()

  if (!session){
      redirect("/auth/login")
  }
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
          <div className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[235px_1fr]">
            <SideBar/>
              <main className="flex flex-col p-8 space-y-8 max-w-screen-2xl">
                <Suspense>
                  {children}
                </Suspense>
              </main>
          </div>

            </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
