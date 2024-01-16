import React from 'react'
import { ubuntu } from '~/lib/fonts'
import { Button } from '~/styles/ui/button'
import { ModeToggle } from './theme-toggle'

export const Navbar = () => {
  return (
    <div className="container flex justify-between py-12">
        <div>
            <h1 className="text-3xl" style={ubuntu.style}> Prbly </h1>
        </div>

        <div className="flex space-x-5">
            <Button>
                Enter gallery
            </Button>
            <ModeToggle/>
        </div>
    </div>
  )
}

// export const Footer = () => {

// }