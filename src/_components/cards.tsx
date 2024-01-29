/* eslint-disable react/no-unescaped-entities */
import { ubuntu } from "~/lib/fonts";
import { Button } from "~/styles/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/styles/ui/card"
import Image from "next/image"
import Link from "next/link";
import { Badge } from "~/styles/ui/badge";
import { FaDollarSign } from "react-icons/fa";
import { CreateFounder, CreateInvestor } from "./create-account";
import { Progress } from "~/styles/ui/progress";


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
          <CreateFounder/>
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
          <CreateInvestor/>
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
    <Link href="dashboard/profile/">
    <div className="relative w-[200px] mt-12 mx-auto">
      <div className='absolute top-0 flex w-full justify-center'>
        <div className='left-0 h-[1.5px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-prblyPrimary to-[rgba(17,17,17,0)] transition-all duration-1000' />
        <div className='right-0 h-[1.5px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-prblyPrimary to-[rgba(17,17,17,0)] transition-all duration-1000' />
      </div>
      <div className='flex flex-col h-full px-5 py-10 rounded-md border border-slate-300 bg-neutral-50 dark:bg-neutral-900'>
        <h1 className="text-lg mb-[6px] font-medium text-left leading-tight dark:text-neutral-100" style={ubuntu.style}> 
          Almost there!
        </h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-200 mb-6 font-normal">
          Complete your profile to prbly get access to all features
        </p>
        <div className='flex'>
          <Progress value={55} className=""/>
          <span className="relative bottom-[-2px] right-10 text-sm font-light"> %55 </span>
        </div>
        
      </div>
  </div>
    </Link>
  );
}


export const StartupCard = () => {
  return (
    <Link href="/dashboard/gallery/prbly">
    <Card className="hover:shadow-lg rounded-md transition-all ease-in">
    <div className="flex items-center space-x-1">
          <Badge  className="px-7 text-sm font-normal mx-auto flex items-center justify-center bg-prblyPrimary">
            Looking for VC Firm or Angel
          </Badge>
      </div>
    <CardHeader className="grid  items-start gap-4 space-y-0">
      <div className="space-y-2">
        <div className='flex space-x-2'>
          <Image src="/5.png" width={30} height={30} alt=""/>
          <CardTitle style={ubuntu.style} className="my-auto"> Prbly.xyz <span className="text-sm text-neutral-500 font-normal ml-2"> Founded 2022 </span></CardTitle>
        </div>
        <CardDescription>
        An invite only community where investors can fund startups and founders can showcase their projects.
        </CardDescription>
      </div>
     
    </CardHeader>
    <CardContent>
      
      <div className="flex space-x-4 text-sm text-muted-foreground">
        <Badge variant="secondary" className="flex items-center">
          Seed
        </Badge>
        <Badge variant="secondary" className="flex items-center">
          Fintech
        </Badge>
        <Badge variant="outline">
        🇱🇧 LB
        </Badge>
        <div className="flex items-center text-prblyPrimary">
          <FaDollarSign className="h-3 w-3" />
          750k
        </div>
      </div>
    </CardContent>
  </Card>
  </Link>
  )
}