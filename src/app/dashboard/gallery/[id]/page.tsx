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
  const data = res.data

  return (
    <>
      <Suspense>
        <SlugGallry id={data?.id as string} name={data?.name as string} logo={data?.logo as string} founded={data?.founded as number} industry={data?.industry as string} tagline={data?.tagline as string} lookingFor={data?.lookingFor as string} desc={data?.desc as string} development={data?.development as string} region={data?.region as string} stage={data?.stage as string} fundGoal={data?.fundGoal as string} milestones={data?.milestones as string} teamSize={data?.teamSize as string} teamDesc={data?.teamDesc as string} website={data?.website} linkedin={data?.linkedin} twitter={data?.twitter} otherSocial={data?.otherSocial} pitch={data?.pitch} video={data?.video}/>
      </Suspense>
    </>
  )
}

export default Prbly