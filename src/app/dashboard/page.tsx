/* eslint-disable react/jsx-no-undef */
import { MyStartups } from "~/_components/home";
import { TopDashNav } from "~/_components/nav";
import { getServerAuthSession } from "~/server/auth";

export default async function SignInButton ()  {
  const session = await getServerAuthSession()

  
  if(session){
    return (
      <>
      <TopDashNav title="Home"/>
      <div className="container">
        {/* <Favorites/> */}
        <MyStartups/>
      </div>
       
      </>
    );
  }
};

