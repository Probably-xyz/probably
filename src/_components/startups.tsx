/* eslint-disable @typescript-eslint/non-nullable-type-assertion-style */
"use client"

import React from 'react'
import { api } from '~/trpc/react'
import { StartupCard } from './cards'
import { Button } from '~/styles/ui/button'
import Link from 'next/link'

export function StartupGrid(){

    const getStartups = api.startup.getAll.useQuery() 
    const startups = getStartups.data
    return (
        <>
            <div className="grid grid-cols-3 gap-8">
                {startups?.map((startup) => (
                    <StartupCard
                        key={startup.id}
                        name={startup.name}
                        logo={startup.logo}
                        tagline={startup.tagline}
                        summary={""}
                        id={startup.id}
                        industry={startup.industry}
                        stage={startup.stage}
                        goal={startup.goal}
                        lookingFor={startup.lookingFor} founded={startup.founded as number} invStage={startup.invStage as string} milestones={startup.milestones as string} size={''} team={''}/>
            ))} 

            </div>
        </>   
    )
}

export function FavGrid(){

    const getStartups = api.startup.getAll.useQuery() 
    const startups = getStartups.data
    return (
        <>
            <div className="grid grid-cols-3 gap-8">
                {startups?.map((startup) => (
                    <StartupCard
                        key={startup.id}
                        name={startup.name}
                        logo={startup.logo}
                        tagline={startup.tagline}
                        summary={""}
                        id={startup.id}
                        industry={startup.industry}
                        stage={startup.stage}
                        goal={startup.goal}
                        lookingFor={startup.lookingFor} founded={startup.founded as number} invStage={startup.invStage as string} milestones={startup.milestones as string} size={''} team={''}/>
                ))}    
                    <Button size="lg" className="max-w-36 my-auto"> Add more </Button>
            </div>
        </>   
    )
}

export function MyGrid(){

    const getStartups = api.startup.getAll.useQuery() 
    const startups = getStartups.data
    return (
        <>
            <div className="grid grid-cols-3 gap-8">
            {startups?.map((startup) => (
                    <StartupCard
                        key={startup.id}
                        name={startup.name}
                        logo={startup.logo}
                        tagline={startup.tagline}
                        summary={""}
                        id={startup.id}
                        industry={startup.industry}
                        stage={startup.stage}
                        goal={startup.goal}
                        lookingFor={startup.lookingFor} founded={startup.founded as number} invStage={startup.invStage as string} milestones={startup.milestones as string} size={''} team={''}/>
            ))} 
                  
            <Link href="/dashboard/create"> <Button size="lg" className="max-w-36 my-auto"> Post startup </Button> </Link> 
           

            </div>
        </>   
    )
}

