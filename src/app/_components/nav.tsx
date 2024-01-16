import React from 'react'
import { ubuntu } from '~/lib/fonts'
import { Button } from '~/styles/ui/button'

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
        </div>
    </div>
  )
}

// export const Footer = () => {

// }