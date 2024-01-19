"use client"

import React from 'react'
import { signOut } from "next-auth/react"
import { Button } from '~/styles/ui/button'

export const GoogleBtn = () => {
  return (
    <div>Google</div>
  )
}

export const GithubBtn = () => {
  return (
    <Button>
      Signin with Github
    </Button>
  )
}

export const LogoutBtn = () => {
  return (
    <Button onClick={() => signOut()}>
      Logout
    </Button>
  )
}