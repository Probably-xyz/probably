import { ChevronLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { AuthForm } from "~/_components/auth-comps";
import { ubuntu } from "~/lib/fonts";
import { getServerAuthSession } from "~/server/auth";

export default async function SignInButton() {
  const session = await getServerAuthSession()
  return (
    <>      
     <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Link
        href="/"
        className="absolute left-4 top-4 md:left-8 md:top-8">
        <>
          <ChevronLeftIcon className="mr-2 h-4 w-4" />
          Back
        </>
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[360px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your email to sign in to your account
          </p>
        </div>
        <AuthForm/>
      </div>
      </div>
    </>
  );
};

