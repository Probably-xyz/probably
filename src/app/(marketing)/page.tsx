/* eslint-disable react/jsx-no-undef */
import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";
import { PreviewCardOne, PreviewCardThree, PreviewCardTwo } from "~/_components/startups-preview";
import { MainHeader, SubHeader } from "~/_components/text-blocks";
import { Button } from "~/styles/ui/button";

export default async function Home() {
  noStore();

  return (
    <>
     <main className="min-h-[73vh] container flex justify-between">
      <div className="max-w-3xl flex flex-col pt-36 justify-between">
        <div className="space-y-3">
          <MainHeader content="The place to get founded and funded"/>
          <SubHeader content="Submit your startup and showcase it to a group of investors, it’s that easy."/>
        </div>
      </div>
      <div className='flex flex-col relative lg:right-10 justify-center space-y-4'>
          <div className="relative">
            <PreviewCardOne/>
          </div>
          <div className="relative right-5">
            <PreviewCardTwo/>
          </div>  
          <div className="relative right-10">
            <PreviewCardThree/>
          </div>  
          {/* <div className="w-[400px] h-[100px] bg-neutral-200 blur-sm relative right-14">
          </div> */}
          <div className="flex mx-auto items-center justify-center relative right-10">
            <Link href="/">
              <Button variant="ghost"> View more </Button>
            </Link>
          </div>
        </div>
    </main>
    </>
  );
}





