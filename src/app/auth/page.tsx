"use client"
import React from 'react'
import { XlHeader, XlSub } from '~/_components/text-blocks'
import { FounderCard, InvestorCard } from '~/_components/type-cards'

const GettingStarted = () => {
  return (
    <>  
     <main className="container flex flex-col pb-20">
        <div className="flex flex-col mx-auto pt-28">
          <XlHeader content="Welcome to Probably"/>
          <XlSub content="Choose the club that best matches your interests, we currently have founders and investors only."/>
        </div>
        <div className="flex flex-col mx-auto justify-center space-y-8 pt-16">
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

export default GettingStarted