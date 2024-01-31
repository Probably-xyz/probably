"use client"

import React from 'react'
import { api } from '~/trpc/react'
import { StartupCard } from './cards'

const StartupGrid = () => {

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
                    lookingFor={startup.lookingFor}/>
            ))} 

            </div>
        </>   
    )
}

export default StartupGrid