import { Button } from "~/styles/ui/button";
import { Suspense } from "react";
import Image from "next/image"
import LoginForm, { LoginCard } from "~/_components/auth-comps";
import Link from "next/link";
import { ubuntu } from "~/lib/fonts";
import { getServerAuthSession } from "~/server/auth";
import { redirect } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/styles/ui/tabs";
import { GridGradient } from "~/_components/bg-comps";


export default async function  LoginPage() {
  const session = await getServerAuthSession()

  if (session){
      redirect("/dashboard")
  }
  return (
    <div className="flex h-screen w-screen justify-center mt-[calc(30vh)]">
      <GridGradient/>
      <LoginCard title="Login" sub="subtitle here / tbd"/>
    </div>
  );
}

