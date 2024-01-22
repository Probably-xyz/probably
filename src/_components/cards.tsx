/* eslint-disable react/no-unescaped-entities */
import { ubuntu } from "~/lib/fonts";
import { Button } from "~/styles/ui/button";


export const FounderCard = () => {
  return (
    <div className="relative max-w-xl">
      <div className='absolute top-0 flex w-full justify-center'>
        <div className='left-0 h-[1.5px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-black to-[rgba(17,17,17,0)] transition-all duration-1000' />
      </div>
      <div className='flex flex-col h-full px-5 py-6 rounded-md border border-slate-300 bg-neutral-50 dark:bg-neutral-900'>
        <h1 className="text-3xl mb-2 font-medium text-left leading-tight dark:text-neutral-100" style={ubuntu.style}> 
           The Founder's Club
        </h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-200">
          Join the Founders Club where investors & contributors can find, support, and fund your startup, easily.
        </p>
        <div className='flex space-x-4 mt-5'>
          <Button size="lg">
            Join
          </Button>
          <Button variant="ghost" size="lg">
            Read more
          </Button>
        </div>
      </div> 
  </div>
  );
};


export const InvestorCard = () => {
  return(
    <div className="relative max-w-xl">
      <div className='absolute top-0 flex w-full justify-center'>
        <div className='left-0 h-[1.5px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-black to-[rgba(17,17,17,0)] transition-all duration-1000' />
      </div>
      <div className='flex flex-col h-full px-5 py-6 rounded-md border border-slate-300 bg-neutral-50 dark:bg-neutral-900'>
        <h1 className="text-3xl mb-2 font-medium text-left leading-tight dark:text-neutral-100" style={ubuntu.style}> 
           The Investor's Club
        </h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-200">
          Join the Founders Club where investors & contributors can find, support, and fund your startup, easily.
        </p>
        <div className='flex space-x-4 mt-5'>
          <Button size="lg">
            Join
          </Button>
          <Button variant="ghost" size="lg">
            Read more
          </Button>
        </div>
      </div>
  </div>
  );
}

export const CompleteProfile = () => {
  return(
    <div className="relative max-w-[270px] h-[260px] mb-72">
      <div className='absolute top-0 flex w-full justify-center'>
        <div className='left-0 h-[1.5px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-prblyPrimary to-[rgba(17,17,17,0)] transition-all duration-1000' />
        <div className='right-0 h-[1.5px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-prblyPrimary to-[rgba(17,17,17,0)] transition-all duration-1000' />
      </div>
      <div className='flex flex-col h-full px-5 py-6 rounded-md border border-slate-300 bg-neutral-50 dark:bg-neutral-900'>
        <h1 className="text-3xl mb-2 font-medium text-left leading-tight dark:text-neutral-100" style={ubuntu.style}> 
           The Investor's Club
        </h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-200">
          Join the Founders Club where investors & contributors can find, support, and fund your startup, easily.
        </p>
        <div className='flex space-x-4 mt-5'>
          <Button size="lg">
            Join
          </Button>
          <Button variant="ghost" size="lg">
            Read more
          </Button>
        </div>
      </div>
  </div>
  );
}