"use client"

/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import React from 'react'
import { TopDashNav } from '~/_components/nav'
import { ubuntu } from '~/lib/fonts'
import { Badge } from '~/styles/ui/badge'
import Image from "next/image"
import { Separator } from '~/styles/ui/separator'
import { FaDollarSign } from 'react-icons/fa'
import { api } from '~/trpc/react'
import { StartupProps } from '~/_components/cards'
import { useParams } from 'next/navigation'

const Prbly = () => {

  const params = useParams()
  const id = params.id as string
  const res = api.startup.getOne.useQuery(id)
  // console.log(res)


  // CREATE COMP SEPERATE, ADD PROPS AND INJECT. CLEAN CODE. THIS SHOULD BE DONE. ALSO SHOW, FROM FOUNDER STARTUPS BELOW, AND SIMILAR STARTUPS  
  return (
    <>
    <div className="container">
    <div className="items-center flex flex-col justify-center"> 
                    <Image src="/8.png" width={80} height={80} alt=""/>
                    <h1 style={ubuntu.style} className="my-auto text-lg mt-3 mb-1"> Savii </h1>
                    <h1 style={ubuntu.style} className="my-auto text-neutral-600 mb-1">
                        Helping gen z become financially fearless                    
                    </h1>
                    <span className="text-sm my-auto text-neutral-500 font-normal"> Founded 2021 </span>
                </div>
                <Separator/>
                <div className="p-5 flex justify-between max-w-4xl">
                    <div className='flex flex-col space-y-4'>
                        <h1 className="text-xl" style={ubuntu.style}> Overview </h1>
                        <div className="flex space-x-4 text-sm text-muted-foreground">
                            <Badge className="flex items-center">
                                Looking for funding, advisors & mentors, mental wellness
                            </Badge>
                            <Badge className="flex items-center">
                                Post-launch
                            </Badge>
                            <Badge variant="secondary" className="flex items-center">
                                Pre-seed
                            </Badge>
                            <Badge variant="secondary" className="flex items-center">
                                FinTech
                            </Badge>
                            <Badge variant="outline" className="flex items-center">
                                🇧🇭 BH
                            </Badge>
                            <div className="flex items-center text-prblyPrimary">
                                <FaDollarSign className="h-3 w-3" />
                                1M
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col px-5 pt-3 space-y-3">
                        <h1 className="text-xl" style={ubuntu.style}> Description </h1>
                        <p className="text-sm text-neutral-500 max-w-3xl"> 
                        Savii goes beyond just financial education – it's a comprehensive banking solution and spending card tailored specifically for youth.
                        
                        <br/> <br/> Our aim is to empower young individuals to become financially savvy, equipping them with the tools and knowledge to earn, spend, save, and invest responsibly. 
                        </p>
                </div>
                <div className="flex flex-col px-5 pt-3 space-y-3">
                        <h1 className="text-xl" style={ubuntu.style}> Milestones </h1>
                        <p className="text-sm text-neutral-500 max-w-3xl"> 
                        Closed $540k of our $1m pre-seed round.
                        <br/><br/>
                        Successful public beta launch and early traction in the UAE: User confidence is growing with increased monthly fund loads and transaction volumes.
                        <br/><br/>

                        Rapid user adoption: We’ve built a waitlist of 4,000+ teenagers without spending a dollar on user acquisition.
                        <br/><br/>

                        Education initiatives: Besides our financial services, we've launched money management workshops for teens and are actively exploring partnerships with schools to integrate our content into their curriculum.
                        </p>
                </div>
    </div>
        
                
    </>
  )
}

export default Prbly