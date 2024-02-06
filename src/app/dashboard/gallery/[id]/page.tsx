/* eslint-disable @typescript-eslint/non-nullable-type-assertion-style */
"use client"

import React, { Suspense } from 'react'
import { api } from '~/trpc/react'
import { useParams } from 'next/navigation'
import {SlugGallry} from '~/_components/slugGallery'

const Prbly = () => {

  const params = useParams()
  const id = params.id as string
  const res = api.startup.getOne.useQuery(id)
  // console.log(res)


  // CREATE COMP SEPERATE, ADD PROPS AND INJECT. CLEAN CODE. THIS SHOULD BE DONE. ALSO SHOW, FROM FOUNDER STARTUPS BELOW, AND SIMILAR STARTUPS  
  return (
    <>
    <Suspense>
      <SlugGallry name={res.data?.name as string} logo={res.data?.logo as string} tagline={res.data?.tagline as string} summary={res.data?.summary as string} industry={res.data?.industry as string} stage={res.data?.stage as string} goal={res.data?.goal as string} lookingFor={res.data?.lookingFor as string} id={res.data?.id as string} founded={res.data?.founded as number} invStage={res.data?.invStage as string} milestones={res.data?.milestones as string}/>
      
    </Suspense>
     
      
   
    </>
  )
}

export default Prbly