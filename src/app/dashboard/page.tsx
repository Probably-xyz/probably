import { redirect } from "next/navigation";
import { LogoutBtn } from "~/_components/auth-comps";
import { getServerAuthSession } from "~/server/auth";
import Image from "next/image"

export default async function SignInButton ()  {
  const session = await getServerAuthSession()

  if (!session){
      redirect("/auth/login")
  }
  
  if(session){
    return (
      <>
        <h1> Hello {session?.user.email} </h1>
        <LogoutBtn/>
        <Image src={`${session?.user.image}`} width={20} height={20} alt={`${session?.user.name}`}/>
      </>
    );
  }
};

