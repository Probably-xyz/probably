/* eslint-disable react/no-unescaped-entities */
import { ubuntu } from "~/lib/fonts";
import {
  ChevronDownIcon,
  CircleIcon,
  PlusIcon,
  StarIcon,
} from "@radix-ui/react-icons"
import { Button } from "~/styles/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/styles/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/styles/ui/dropdown-menu"
import { Separator } from "~/styles/ui/separator"
import Image from "next/image"
import Link from "next/link";
import { Badge } from "~/styles/ui/badge";
import { FaDollarSign } from "react-icons/fa";


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
    <div className="relative w-[220px] h-[260px] mt-12 mx-auto">
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
      </div>
  </div>
  );
}


export const StartupCard = () => {
  return (
    <Link href="/dashboard/gallery/prbly">
    <Card className="hover:shadow-md rounded-md">
    <div className="flex items-center space-x-1">
          <Badge  className="px-7 text-sm font-normal mx-auto flex items-center justify-center bg-prblyPrimary">
            Looking for VC Firm, and more
          </Badge>
      </div>
    <CardHeader className="grid  items-start gap-4 space-y-0">
      <div className="space-y-2">
        <div className='flex space-x-2'>
          <Image src="/5.png" width={30} height={30} alt=""/>
          <CardTitle style={ubuntu.style} className="my-auto"> Prbly <span className="text-sm text-neutral-500 font-normal ml-2"> Founded 2022 </span></CardTitle>
        </div>
        <CardDescription>
        An invite only community where investors can fund startups and founders can showcase their projects.
        </CardDescription>
      </div>
     
    </CardHeader>
    <CardContent>
      
      <div className="flex space-x-4 text-sm text-muted-foreground">
        <Badge variant="secondary" className="flex items-center">
          Series B
        </Badge>
        <Badge variant="outline">
        🇱🇧 LB
        </Badge>
        <div className="flex items-center text-prblyPrimary">
          <FaDollarSign className="h-3 w-3" />
          200k
        </div>
      </div>
    </CardContent>
  </Card>
  </Link>
  )
}