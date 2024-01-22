import { Button } from "~/styles/ui/button";
import { Suspense } from "react";
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
    <div className="relative z-10 mt-[calc(30vh)] h-fit w-full max-w-md overflow-hidden border-y border-neutral-200 sm:rounded-md sm:border sm:shadow-xl">
      <div className="flex flex-col items-center justify-center space-y-3 border-b border-neutral-200 bg-neutral-50 px-4 py-6 pt-8 text-center sm:px-16">
      <Link href="/">
          <Image src="/5.png" width={50} height={50} alt={""}/>
      </Link>      
        <h3 className="text-xl font-semibold" style={ubuntu.style}>
          Sign in to Probably
        </h3>
        <p className="text-sm text-neutral-500">
          Join the club
        </p>
      </div>
      <div className="flex flex-col space-y-3 bg-neutral-100 px-4 py-8 sm:px-16">
        <Suspense
          fallback={
            <>
              <Button disabled={true}  variant="secondary"> Sign in with github </Button>
              <Button disabled={true}  variant="secondary"> Sign in with google </Button>
              <Button disabled={true}  variant="secondary"> Sign in with email </Button>
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

