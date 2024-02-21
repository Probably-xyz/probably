/* eslint-disable react/jsx-no-undef */
import { Favorites, MyStartups, RecentActivity } from "~/_components/home";
import { TopDashNav } from "~/_components/nav";
import { getServerAuthSession } from "~/server/auth";

export default async function Dash() {
  const session = await getServerAuthSession();

  if (session?.user.role === "founder") {
    return (
      <>
        <TopDashNav title="Home" />
        <div className="container flex flex-col space-y-8">
          <MyStartups />
          <RecentActivity />
        </div>
      </>
    );
  }
  if (session?.user.role === "investor") {
    return (
      <>
        <TopDashNav title="Home" />
        <div className="container">
          <Favorites />
        </div>
      </>
    );
  }
}
