import { redirect } from "next/navigation";
import { getServerAuthSession } from "~/server/auth";

export default async function SignInButton ()  {
  const session = await getServerAuthSession()

  if (!session){
      redirect("/auth/login")
  }
  if(session){
    return (
      <>
        <h1> Hello {session?.user.email} </h1>
      </>
    );
  }
};

