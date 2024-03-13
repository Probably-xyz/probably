/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/non-nullable-type-assertion-style */
/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { ubuntu } from '~/lib/fonts'
import { Button } from '~/styles/ui/button'
import { ModeToggle } from './theme-toggle'
import Link from 'next/link'
import { UserAvatar } from './dashboard'
import { getServerAuthSession } from '~/server/auth'

export const Navbar = () => {
  return (
    <div className="container flex justify-between py-12">
        <div>
          <Link href="/">
            <h1 className="text-3xl" style={ubuntu.style}> Prbly </h1>
          </Link>
        </div>

        <div className="flex space-x-5">
            <Link href="/dashboard">
            <Button className="my-auto">
              Get started
            </Button>
          </Link>  
            <ModeToggle/>
        </div>
    </div>
  )
}

export const Footer = () => {
  return(
    <footer className="flex container flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-slate-300 py-10 text-center md:justify-between">
    <Link href="/">
      <h1 className="text-slate-400">
        &copy; 2024 Probably
      </h1>
    </Link>
    <ul className="flex flex-wrap items-center gap-x-8">
      <li>
      <Link
          href="https://github.com"
          className=""
        >
          <Button variant="ghost" className="my-auto">
            X
          </Button>
        </Link>
      </li>
      <li>
      <Link
          href="https://github.com"
          className=""
        >
          <Button variant="ghost" className="my-auto">
            Linkedin
          </Button>
        </Link>
      </li>
      <li>
        <Link
          href="https://github.com"
          className=""
        >
          <Button variant="ghost" className="my-auto">
            Github
          </Button>
        </Link>
      </li>
      <li>
        <Link href="/manifesto">
            <Button variant="ghost" className="my-auto">
              Mainfesto
            </Button>
        </Link>
      </li>
    </ul>
  </footer>
  )
}

export const Announcment = () => {
  return(
    <div className="w-screen flex items-center justify-center bg-prblyPrimary h-10">
      <div className="mx-auto">
          <h1 className="text-white font-normal text-sm" style={ubuntu.style}> We've officialy launched 🎉  </h1>
      </div>
    </div>
  )
}


export interface TitleProp {
  title: any,
}


export const revalidate = 1300
export async function TopDashNav({title}: TitleProp) {
  const session = await getServerAuthSession()
  
  const name = session?.user.name
  const email = `${session?.user.email}`
  
  if (name === "null"){
    const init = email.split("")
    return (
      <div className="flex flex-col gap-2 justify-between">
        <div className="flex h-[60px] max-w-screen-xl justify-between items-center px-6 pb-10 pt-14 border-b">
            <div className="flex items-center gap-2 font-semibold">
                <span className="my-auto text-xl" style={ubuntu.style}> {title} </span>
                
            </div>
            <div className="flex items-center gap-2 ">
              <UserAvatar initials={init[0]} image={session?.user.image } name={"Change display name"} email={session?.user.email } id={''}/>
            </div>
        </div>
      </div>
     )
  }
  else if (name != "null"){
    const initName = `${session?.user.name}`
    const init = initName.split("")
    return (
    <div className="flex flex-col gap-2 justify-between">
    <div className="flex h-[60px] max-w-screen-xl justify-between items-center px-6 pb-10 pt-14 border-b">
        <div className="flex items-center gap-2 font-semibold">
            <span className="my-auto text-xl" style={ubuntu.style}> {title} </span>

        </div>
        <div className="flex items-center gap-2 ">
          <UserAvatar initials={init[0]} image={session?.user.image as string} name={name as string} email={session?.user.email as string} id={''}/>
        </div>
    </div>
  </div>
    )
  }

     
}