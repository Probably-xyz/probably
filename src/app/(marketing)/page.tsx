import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";
import { MainHeader, SubHeader } from "~/_components/text-blocks";
import { Button } from "~/styles/ui/button";

export default async function Home() {
  noStore();

  return (
    <>
    <div
    className="-z-10 gridBg"
    ></div>
     <main className="min-h-[73vh] container flex">
      <div className="max-w-2xl flex flex-col space-y-5 pt-36">
        <div className="space-y-2">
          <MainHeader content="The place to get founded and funded"/>
          <SubHeader content="An invite only community where investors can fund startups and founders can showcase their projects."/>
        </div>
        <div>
          <Link href="/dashboard">
            <Button size="lg">
              Enter gallery
            </Button>
          </Link>
        </div>
      </div>
    </main>
    </>
  );
}





