import { unstable_noStore as noStore } from "next/cache";
import { MainHeader, SubHeader } from "./_components/text-blocks";
import { Button } from "~/styles/ui/button";

export default async function Home() {
  noStore();

  return (
    <main className="min-h-screen container flex">
      <div className="max-w-3xl flex flex-col space-y-5 pt-44">
        <div className="space-y-2">
          <MainHeader content="The place to get founded and funded"/>
          <SubHeader content="An invite only community where investors can fund startups and founders can showcase their projects."/>
        </div>
        <Button className="max-w-[115.6px]">
          Enter gallery
        </Button>
      </div>
    </main>
  );
}


