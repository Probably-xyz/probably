/* eslint-disable react/jsx-no-undef */
import { redirect } from "next/navigation";
import { StartupCard } from "~/_components/cards";
import { TopDashNav } from "~/_components/nav";
import { getServerAuthSession } from "~/server/auth";

export default async function SignInButton ()  {
  const session = await getServerAuthSession()

  if (!session){
      redirect("/auth/login")
  }
  
  if(session){
    return (
      <>
        <TopDashNav title="Gallery"/>
        <div className="flex space-x-8">
            <StartupCard/>
            <StartupCard/>
            <StartupCard/>
          </div>
          <div className="flex space-x-8">
            <StartupCard/>
            <StartupCard/>
            <StartupCard/>
          </div>
      </>
    );
  }
};

