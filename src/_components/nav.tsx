/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { ubuntu } from '~/lib/fonts'
import { Button } from '~/styles/ui/button'
import { ModeToggle } from './theme-toggle'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <div className="container flex justify-between py-12">
        <div>
          <Link href="/">
            <h1 className="text-3xl" style={ubuntu.style}> Prbly </h1>
          </Link>
        </div>

        <div className="flex space-x-5">
            <Link href="/manifesto">
              <Button variant="outline" className="my-auto">
                  Mainfesto
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
          href="https://x.com"
          className="font-normal transition-colors hover:text-prblyPrimary"
        >
          X
        </Link>
      </li>
      <li>
        <Link
          href="https://linkedin.com"
          className="font-normal transition-colors hover:text-prblyPrimary"
        >
          linkedin
        </Link>
      </li>
      <li>
        <Link
          href="https://github.com"
          className="font-normal transition-colors hover:text-prblyPrimary"
        >
          github
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