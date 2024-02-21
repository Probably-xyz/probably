import React from 'react'
import { GridGradient, HalfGrid } from '~/_components/bg-comps'
import { XlHeader, XlSub } from '~/_components/text-blocks'
import { FounderCard, InvestorCard } from '~/_components/cards'
import { getServerAuthSession } from '~/server/auth'
import { redirect, useRouter } from 'next/navigation'

export default async function GettingStarted() {
  const session = await getServerAuthSession()
  if(!session){
    redirect("/auth/login")
  }

  if (session?.user.role === "founder" || session?.user.role === "investor"){
    redirect("/dashboard")
  }
  
  return (
    <> 
    <GridGradient/>
     <main className="container flex flex-col pt-44">
        <div className="flex flex-col mx-auto pb-14">
          <XlHeader content="Welcome to Probably"/>
          <XlSub content="Choose the club that best matches your interests"/>
        </div>
        <div className="flex flex-col mx-auto space-y-10">
            <div> 
              <FounderCard/> 
            </div>
            <div> 
              <InvestorCard/> 
            </div>
        </div>
    </main>
    </>
  )
}

