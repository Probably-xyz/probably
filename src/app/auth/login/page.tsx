// import { ChevronLeftIcon } from "@radix-ui/react-icons";
// import Link from "next/link";
// import { AuthForm } from "~/_components/auth-comps";
// import { GridGradient } from "~/_components/bg-comps";
// import { ubuntu } from "~/lib/fonts";
// import { getServerAuthSession } from "~/server/auth";

// export default async function SignInButton() {
//   const session = await getServerAuthSession()
//   return (
//     <>      
//      <div className="container flex h-screen w-screen flex-col items-center justify-center">
//       <GridGradient/>
//       <Link
//         href="/"
//         className="absolute left-4 top-4 md:left-8 md:top-8">
//         <>
//           <ChevronLeftIcon className="mr-2 h-4 w-4" />
//           Back
//         </>
//       </Link>
//       <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[360px]">
//         <div className="flex flex-col space-y-2 text-center">
//           <h1 className="text-2xl font-semibold tracking-tight">
//             Welcome back
//           </h1>
//           <p className="text-sm text-muted-foreground">
//             Enter your email to sign in to your account
//           </p>
//         </div>
//         <AuthForm/>
//       </div>
//       </div>
//     </>
//   );
// };

import { Button } from "~/styles/ui/button";
import { Suspense } from "react";
// import LoginForm from "./form";
import Image from "next/image"
import LoginForm from "~/_components/auth-comps";
import { GridGradient } from "~/_components/bg-comps";
import Link from "next/link";
import { ubuntu } from "~/lib/fonts";
import { getServerAuthSession } from "~/server/auth";
import { redirect } from "next/navigation";


export default async function  LoginPage() {

  const session = await getServerAuthSession()

  if (session){
      redirect("/dashboard")
  }
  
  return (
    <div className="flex h-screen w-screen justify-center">
    <GridGradient/>
    <div className="relative z-10 mt-[calc(30vh)] h-fit w-full max-w-md overflow-hidden border-y border-gray-200 sm:rounded-md sm:border sm:shadow-xl">
      <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
      <Link href="/">
          <Image src="/5.png" width={50} height={50} alt={""}/>
      </Link>
                
        <h3 className="text-xl font-semibold" style={ubuntu.style}>
          Sign in to Probably
        </h3>
        <p className="text-sm text-gray-500">
          Join the club
        </p>
      </div>
      <div className="flex flex-col space-y-3 bg-gray-50 px-4 py-8 sm:px-16">
        <Suspense
          fallback={
            <>
              <Button disabled={true}  variant="secondary"> Sign in with github </Button>
              <Button disabled={true}  variant="secondary"> Sign in with github </Button>
              <Button disabled={true}  variant="secondary"> Sign in with github </Button>
              <div className="mx-auto h-5 w-3/4 rounded-lg bg-gray-100" />
            </>
          }
        >
          <LoginForm />
        </Suspense>
      </div>
    </div>
    </div>
  );
}

