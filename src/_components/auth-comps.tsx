"use client"
import React from 'react'
import { signOut } from "next-auth/react"
import { Button } from '~/styles/ui/button'
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Input } from '~/styles/ui/input';
import { Label } from '~/styles/ui/label';

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
    <Button className="w-full" size="lg" variant="outline">
      <FaGithub className="mr-2 h-4 w-4"/>
      Github
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

export const AuthForm = () => {
  return (
    <div className="grid gap-6">
    <div className="grid gap-2">
    <div className="grid gap-1">
      <Label className="sr-only" htmlFor="email">
        Email
      </Label>
      <Input
        id="email"
        placeholder="name@example.com"
        type="email"
        autoCapitalize="none"
        autoComplete="email"
        autoCorrect="off"
       
      />
      {/* {errors?.email && (
        <p className="px-1 text-xs text-red-600">
          {errors.email.message}
        </p>
      )} */}
    </div>
    <Button>
      Sign In with Email
    </Button>
  </div>
  <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
     <GithubBtn/>
    </div>
  )
}
