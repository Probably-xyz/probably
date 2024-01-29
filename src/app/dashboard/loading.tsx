import React from 'react'
import { TopDashNav } from '~/_components/nav'
import { SkeletonCard } from '~/_components/skeletons'
import { Skeleton } from '~/styles/ui/skeleton'

const loading = () => {
  return (
    <>
        <TopDashNav title={<Skeleton className="h-4 w-[200px]" />}/>
        <SkeletonCard/>
    </>  
  )
}

export default loading