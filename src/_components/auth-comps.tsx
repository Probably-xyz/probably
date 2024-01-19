"use client"
import React from 'react'
import { signOut } from "next-auth/react"
import { Button } from '~/styles/ui/button'
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Input } from '~/styles/ui/input';

export const GoogleBtn = () => {
  return (
    <Button className="w-full" size="lg">
     <FaGoogle className="mr-2 h-4 w-4 my-auto"/>
      with Google
    </Button>
  )
}

export const GithubBtn = () => {
  return (
    <Button className="w-full" size="lg">
      <FaGithub className="mr-2 h-4 w-4"/>
       with Github
    </Button>
  )
}

export const SigninEmail = () => {
    return (
      <Input placeholder='Sign in with email' className="bg-white"/>    
    )
}
export const LogoutBtn = () => {
  return (
    <Button onClick={() => signOut()}>
      Logout
    </Button>
  )
}
