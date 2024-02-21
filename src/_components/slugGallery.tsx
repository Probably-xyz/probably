import React from 'react'
import Image  from 'next/image'
import { Badge } from '~/styles/ui/badge'
import { ubuntu } from '~/lib/fonts'
import { Separator } from '~/styles/ui/separator'
import { FaDollarSign } from 'react-icons/fa'
import { Avatar, AvatarFallback, AvatarImage } from '~/styles/ui/avatar'
import Link from 'next/link'
import { type StartupProps } from '~/lib/types'
import { Button } from '~/styles/ui/button'

export function SlugGallry({name, logo, lookingFor, tagline, desc, industry, stage, development, milestones, founded, region, teamSize, teamDesc, fundGoal, pitch}: StartupProps) {

    return (
        <>
          <div className="w-full flex flex-col overflow-scroll p-10">
                <div className="flex justify-between">
                <div className="flex flex-col mb-3 max-w-lg"> 

                    <div className="w-16 h-16 items-center flex">
                        <Image src={logo} width={100} height={100} alt="" className="my-auto" loading="lazy"/>
                    </div>
                   

                    <h1 style={ubuntu.style} className="my-auto text-lg pt-6"> {name} </h1>
                    <h1 style={ubuntu.style} className="my-auto text-neutral-600 mb-2">
                        {tagline}                    
                    </h1>
                    <span className="text-sm my-auto text-neutral-500 font-normal"> Founded {founded} </span>
                    

                    

                </div>
                <div className="flex flex-col space-y-4 text-sm text-muted-foreground justify-center relative top-10">
                        <div className="flex flex-row space-x-4">
                        <div className='flex space-x-2'> 
                                <h2 className="my-auto"> Posted by </h2> 
                                <Link href="/">
                                    <Avatar className="h-7 w-7 outline outline-prblyPrimary">
                                            <AvatarImage src="/5dd.png" alt="hello" />
                                            <AvatarFallback> NK </AvatarFallback>
                                    </Avatar>
                                </Link>
                        </div>
                         <h2 className="my-auto"> Size of team: <span className="text-prblyPrimary"> {teamSize} </span> </h2> 
                        </div>
                        
                </div>
                </div>
                <Separator/>
                <div className="flex justify-between mt-10">
                    
                <div className="flex flex-col ">
                        <h1 className="text-2xl mb-5" style={ubuntu.style}> Overview </h1>

                        <div className="flex flex-col space-y-4 text-sm text-muted-foreground justify-center mb-8">
                        <div className="flex flex-row space-x-4">
                          
                                <Badge className="flex items-center">
                                    Looking for {lookingFor}
                                </Badge>
                                <Badge className="flex items-center">
                                    {stage}
                                </Badge>
                                <Badge variant="secondary" className="flex items-center">
                                    {development}
                                </Badge>
                                <Badge variant="secondary" className="flex items-center">
                                    {industry}
                                </Badge>
                        </div>
                        <div className="flex flex-row space-x-4">
                            <Badge variant="outline" className="flex items-center">
                                {region}
                            </Badge>
                            <div className="flex items-center text-prblyPrimary text-base">
                                <FaDollarSign className="h-4 w-4" />
                                {fundGoal}
                            </div>
                        </div>  
                </div>

                            <h1 className="text-xl mb-1" style={ubuntu.style}> Description </h1>
                            <p className="text-base text-neutral-500 max-w-3xl mb-10"> 
                                {desc}
                            </p>
                       
                            <h1 className="text-xl mb-1" style={ubuntu.style}> Milestones </h1>
                            <p className="text-base text-neutral-500 max-w-3xl mb-10"> 
                                {milestones}
                            </p>
                      

                            <h1 className="text-xl mb-1" style={ubuntu.style}> Core team </h1>
                            <p className="text-base text-neutral-500 max-w-3xl mb-10"> 
                                {teamDesc}
                            </p>
                </div>
                <a href={pitch!}>
                    <Button className="w-[220px] mt-10" size='lg'> Download pitch </Button>
                </a>

                </div>
               
            </div>
            
        </>
  )
}

