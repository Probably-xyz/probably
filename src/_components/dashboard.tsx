/* eslint-disable react/no-unescaped-entities */
"use client"
import Link from "next/link"
import React from "react"
import { ubuntu } from "~/lib/fonts"
import { Badge } from "~/styles/ui/badge"
import Image from "next/image"
import { Separator } from "~/styles/ui/separator"
import { CompleteProfile } from "./cards"
import { Crosshair2Icon, ExternalLinkIcon, GearIcon, ImageIcon, PersonIcon, RocketIcon } from "@radix-ui/react-icons"
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


export function SideBar() {
  return (
      <div className="hidden border-r lg:block dark:bg-gray-800/40">
        <div className="flex flex-col gap-2">
          <div className="flex h-[60px] items-center px-6 pb-10 pt-14">
            <Link className="flex items-center gap-2 font-semibold" href="/">
              <Image src="/5.png" width={40} height={40} alt={"Prbly-Logo"} className="my-auto"/>
              <span className="my-auto text-xl" style={ubuntu.style}> Prbly </span>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-4 text-sm font-medium space-y-2">
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-500 transition-all hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-neutral-50"
                href="/dashboard/gallery"
              >
                <ImageIcon className="h-4 w-4"/>
                
                The Gallery
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center bg-prblyPrimary">12</Badge>
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-500 transition-all hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-neutral-50"
                aria-disabled={true}
                href=""
              >
                <RocketIcon className="w-4 h-4"/>
                The Founder's club
                <Badge variant="secondary" className="text-[10px] ml-auto flex shrink-0 items-center justify-center"> Soon </Badge>
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-500 transition-all hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-neutral-50"
                href="#"
              >
                <Crosshair2Icon className="w-4 h-4"/>
                The Investor's club
                <Badge variant="secondary" className="text-[10px] ml-auto flex shrink-0 items-center justify-center"> Soon </Badge>
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-500 transition-all hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-neutral-50"
                href="#"
              >
                <PersonIcon className="h-4 w-4"/>
                My profile
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center bg-prblyPrimary">3</Badge>
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-500 transition-all hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-neutral-50"
                href="#"
              >
                <GearIcon className="h-4 w-4" />
                Settings
              </Link>
            </nav>
            <Separator className="w-10/12 mx-auto my-5"/>
            <nav className="grid items-start px-4 text-sm font-medium space-y-3">
            <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-500 transition-all hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-neutral-50"
                href="#"
              >
                <ExternalLinkIcon className="w-4 h-4"/>
                Twitter / X
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-neutral-500 transition-all hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-neutral-50"
                href="#"
              >
                <ExternalLinkIcon className="w-4 h-4"/>
                Linkedin
              </Link>
            </nav>
            <div className="grid items-start px-4 text-sm font-medium space-y-3"> 
              <CompleteProfile/>
            </div>
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
      <DropdownMenuContent className="w-56" align="end" forceMount>
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
          <DropdownMenuItem className="cursor-pointer">
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          </Link>
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