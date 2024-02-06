/* eslint-disable react/jsx-no-undef */
import { TopDashNav } from "~/_components/nav";
import { getServerAuthSession } from "~/server/auth";

export default async function SignInButton ()  {
  const session = await getServerAuthSession()

  
  if(session){
    return (
      <>
      <TopDashNav title="Home"/>
        <h1 className="text-xl px-10 py-3"> 
          Investor wishlist -- founder spotlight (favorites) - prbly updates and news
       </h1>


       <h1 className="text-xl px-10 py-3"> 
         Founder (My startups) -- TBD - prbly updates and news
       </h1>       
      </>
    );
  }
};

