/* eslint-disable @typescript-eslint/no-unsafe-assignment */
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
                        logo={startup.logo!}
                        tagline={startup.tagline}
                        id={startup.id}
                        industry={startup.industry}
                        stage={startup.stage}
                        fundGoal={startup.fundGoal as string}
                        lookingFor={startup.lookingFor}
                        founded={startup.founded!} 
                        region={startup.region}
                        />
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
                        logo={startup.logo!}
                        tagline={startup.tagline}
                        id={startup.id}
                        industry={startup.industry}
                        stage={startup.stage}
                        fundGoal={startup.fundGoal as string}
                        lookingFor={startup.lookingFor}
                        founded={startup.founded!} 
                        region={startup.region}
                        />
                ))}    
                    <Button size="lg" className="max-w-36 my-auto"> Add more </Button>
            </div>
        </>   
    )
}

export function MyGrid(){

    const getFounder = api.startup.getMyStartups.useQuery() 
    const founder = getFounder.data
    const posts = founder?.startups
    return (
        <>
            <div className="grid grid-cols-3 gap-8">
            {posts?.map((post) => (
                    <StartupCard
                        key={post.id}
                        name={post.name}
                        logo={post.logo!}
                        tagline={post.tagline}
                        id={post.id}
                        industry={post.industry}
                        stage={post.stage}
                        fundGoal={post.fundGoal as string}
                        lookingFor={post.lookingFor}
                        founded={post.founded!} 
                        region={post.region}
                        />
            ))} 
                  
            <Link href="/dashboard/create"> <Button size="lg" className="max-w-36 my-auto"> Post startup </Button> </Link> 
           

            </div>
        </>   
    )
}

