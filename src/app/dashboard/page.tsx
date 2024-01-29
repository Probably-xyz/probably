/* eslint-disable react/jsx-no-undef */
import { TopDashNav } from "~/_components/nav";
import { getServerAuthSession } from "~/server/auth";

export default async function SignInButton ()  {
  const session = await getServerAuthSession()

  
  if(session){
    return (
      <>
      <TopDashNav title="Home"/>
      <h1> Hello {session?.user.name} </h1>
      </>
    );
  }
};

