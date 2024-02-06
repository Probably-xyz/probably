/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-implied-eval */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable react/no-unescaped-entities */
"use client"

import Link from "next/link"
import React from "react"
import { ubuntu } from "~/lib/fonts"
import { Badge } from "~/styles/ui/badge"
import Image from "next/image"
import { Separator } from "~/styles/ui/separator"
import { CompleteProfile } from "./cards"
import { Crosshair2Icon, ExternalLinkIcon, GearIcon, HomeIcon, ImageIcon, PersonIcon, RocketIcon } from "@radix-ui/react-icons"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/styles/ui/avatar"
import { Button } from "~/styles/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "~/styles/ui/dropdown-menu"
import { signOut } from "next-auth/react"
import { usePathname } from "next/navigation"
import { cn } from "~/lib/utils"
import { toast } from "sonner"

export function SideBar() {
  const path = usePathname()

  function copyFunc() {
    navigator.clipboard.writeText("hello@prbly.xyz")
    toast.success("Email copied to clipboard")
  }
  
  const prog = 35
  return (
      <div className="hidden border-r lg:block dark:bg-gray-800/40">
        <div className="flex fixed flex-col">
          <div className="flex h-[60px] items-center px-6 pb-12 pt-14">
            <Link className="flex items-center gap-2 font-semibold" href="/">
              <Image src="/5.png" width={30} height={30} alt={"Prbly-Logo"} className="my-auto"/>
              <span className="my-auto text-lg font-normal" style={ubuntu.style}> Prbly <span className="text-prblyPrimary text-sm my-auto"> (investor) </span>  </span>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-4 text-sm font-normal space-y-4">
            
              <Link
                className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-500 transition-all hover:bg-neutral-200/80 dark:text-neutral-400 dark:hover:text-neutral-50", path === "/dashboard" ? "bg-neutral-100" : "bg-transparent")}
                href="/dashboard/"
              >
                <HomeIcon className="h-[14px] w-[14px]"/>
                Home
              </Link>
              <Link
                className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-500 transition-all hover:bg-neutral-200/80 dark:text-neutral-400 dark:hover:text-neutral-50", path.startsWith("/dashboard/gallery") ? "bg-neutral-100" : "bg-transparent")}
                href="/dashboard/gallery"
              >
                <ImageIcon className="h-[14px] w-[14px]"/>
                
                Gallery
                <Badge className="ml-auto flex h-4 w-4 shrink-0 items-center justify-center bg-prblyPrimary">12</Badge>
              </Link>
              <Link
                className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-500 transition-all hover:bg-neutral-200/80 dark:text-neutral-400 dark:hover:text-neutral-50 pointer-events-none opacity-50", path.startsWith("/dashboard/founders") ? "bg-neutral-100" : "bg-transparent")}
                aria-disabled={true}
                href=""
              >
                <RocketIcon className="h-[14px] w-[14px]"/>
                Founders
                <Badge variant="secondary" className="text-[8px] ml-auto flex shrink-0 items-center justify-center"> Soon </Badge>
              </Link>
              <Link
                className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-500 transition-all hover:bg-neutral-200/80 dark:text-neutral-400 dark:hover:text-neutral-50 pointer-events-none opacity-50", path.startsWith("/dashboard/investors") ? "bg-neutral-100" : "bg-transparent")}
                href="#"
              >
                <Crosshair2Icon className="h-[14px] w-[14px]"/>
                Investors
                <Badge variant="secondary" className="text-[8px] ml-auto flex shrink-0 items-center justify-center"> Soon </Badge>
              </Link>
              <Link
                className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-500 transition-all hover:bg-neutral-200/80 dark:text-neutral-400 dark:hover:text-neutral-50", path.startsWith("/dashboard/profile") ? "bg-neutral-100" : "bg-transparent")}
                href="/dashboard/profile"
              >
                <PersonIcon className="h-[14px] w-[14px]"/>
                Profile
                <Badge className="ml-auto flex h-4 w-4 shrink-0 items-center justify-center bg-prblyPrimary">3</Badge>
              </Link>
            
            </nav>
            <Separator className="w-10/12 mx-auto my-5"/>
            <nav className="grid items-start px-4 text-sm font-normal space-y-4">
            <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-500 font-bold transition-all hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-neutral-50"
                href="#"
              >
                <ExternalLinkIcon className="h-[14px] w-[14px]"/>
                  X
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-500 transition-all hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-neutral-50"
                href="#"
              >
                <ExternalLinkIcon className="h-[14px] w-[14px]"/>
                Linkedin
              </Link>
              <span
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-500 transition-all hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-neutral-50 cursor-pointer"
                onClick={() => copyFunc()}
              >
                <ExternalLinkIcon className="h-[14px] w-[14px]"/>
                Contact us
              </span>
            </nav>
            <div className="grid items-start px-4 text-sm font-medium space-y-3"> 
              <CompleteProfile progress={prog}/>
            </div>
            {/* <DashToggle/> */}
          </div>
        </div>
      </div>
  )
}

interface UserDetails {
  initials?: string,
  image?: string,
  name?: string,
  email?: string,
  id?: string
}

export function UserAvatar({initials, image, name, email, id}: UserDetails) {
  return (
      <>
      <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8 outline outline-prblyPrimary">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback> {initials} </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mt-2" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none"> {name} </p>
            <p className="text-xs leading-none text-muted-foreground">
              {email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
         
          <Link href="/">   
            <DropdownMenuItem className="cursor-pointer"> Back to home  </DropdownMenuItem> 
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer" onClick={() => signOut()} >
          Log out 
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
      </>
  )
}