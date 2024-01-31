import React from 'react'
import { SkeletonLong, SkeletonParagraph, SkeletonSlugImage, SkeletonSlugTitle } from '~/_components/skeletons'
import { ubuntu } from '~/lib/fonts'
import { Separator } from '~/styles/ui/separator'
import { Skeleton } from '~/styles/ui/skeleton'

const loading = () => {
  return (
    <div className="w-full flex flex-col overflow-scroll p-10">
          <div className="flex justify-between">
                <div className="flex flex-col mb-3 max-w-lg"> 
                <div className="items-center flex">
                    <SkeletonSlugImage/>
                </div>
                    <SkeletonSlugTitle/>
                    <SkeletonSlugTitle/>
                </div>
                <div className="flex flex-col justify-center my-auto mt-20">
                         <div className="flex flex-row space-x-4">
                            <SkeletonLong/>
                        </div>     
                </div>
            </div>
                <Separator/>
                <div className="flex flex-col space-y-3 mt-10">
               
                        <h1 className="text-2xl mb-6" style={ubuntu.style}> Overview </h1>

                   
                        <h1 className="text-xl mb-2" style={ubuntu.style}> Description </h1>
                        <p className="text-base text-neutral-500 max-w-3xl"> 
                            <SkeletonParagraph/>
                        </p>

                       
                        <h1 className="text-xl mb-2" style={ubuntu.style}> Milestones </h1>
                        <p className="text-base text-neutral-500 max-w-3xl"> 
                            <SkeletonParagraph/>
                        </p>
                </div>
        </div>
                
  )
}

export default loading