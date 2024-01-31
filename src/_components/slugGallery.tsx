import React, { Suspense } from 'react'
import type { StartupProps } from './cards'
import Image  from 'next/image'
import { Badge } from '~/styles/ui/badge'
import { ubuntu } from '~/lib/fonts'
import { Separator } from '~/styles/ui/separator'
import { FaDollarSign } from 'react-icons/fa'
// import { SkeletonLong, SkeletonParagraph, SkeletonSlugImage, SkeletonSlugTitle } from './skeletons'

const SlugGallry = ({name, logo, lookingFor, tagline, summary, industry, stage, goal, invStage, milestones, founded}: StartupProps) => {

    return (
        <>
          <div className="w-full flex flex-col overflow-scroll p-10">
            <div className="flex justify-between">
                <div className="flex flex-col mb-3 max-w-lg"> 

                    <div className="w-16 h-16 items-center flex">
                        {/* <Suspense fallback={<SkeletonSlugImage/>}> */}
                            <Image src={logo} width={100} height={100} alt="" className="my-auto"/>
                        {/* </Suspense> */}
                        
                    </div>
                    {/* <Suspense fallback={<SkeletonSlugTitle/>}> */}
                        <h1 style={ubuntu.style} className="my-auto text-lg pt-6"> {name} </h1>
                        <h1 style={ubuntu.style} className="my-auto text-neutral-600 mb-2">
                            {tagline}                    
                        </h1>
                        <span className="text-sm my-auto text-neutral-500 font-normal"> Founded {founded} </span>
                    {/* </Suspense> */}
                    

                </div>
                
                <div className="flex flex-col space-y-4 text-sm text-muted-foreground justify-center my-auto mt-20">
                    {/* <Suspense fallback={<SkeletonLong/>}> */}
                        <div className="flex flex-row space-x-4">
                          
                                <Badge className="flex items-center p-2">
                                    Looking for {lookingFor}
                                </Badge>
                                <Badge className="flex items-center p-2">
                                    {stage}
                                </Badge>
                                <Badge variant="secondary" className="flex items-center p-2">
                                    {invStage}
                                </Badge>
                                <Badge variant="secondary" className="flex items-center p-2">
                                {industry}
                                </Badge>
                        </div>
                        <div className="flex flex-row space-x-4">
                            <Badge variant="outline" className="flex items-center p-2">
                                🇧🇭 BH
                            </Badge>
                            <div className="flex items-center text-prblyPrimary text-base">
                                <FaDollarSign className="h-4 w-4" />
                                {goal}
                            </div>
                        </div>  
                    {/* </Suspense>        */}
                </div>
                   
            </div>
                
                <Separator/>

                <div className="flex flex-col space-y-3 mt-10">
               
                        <h1 className="text-2xl mb-6" style={ubuntu.style}> Overview </h1>

                   
                        <h1 className="text-xl mb-2" style={ubuntu.style}> Description </h1>
                        {/* <Suspense fallback={<SkeletonParagraph/>}> */}
                            <p className="text-base text-neutral-500 max-w-3xl"> 
                                {summary}
                            </p>
                        {/* </Suspense> */}
                       

                       
                        <h1 className="text-xl mb-2" style={ubuntu.style}> Milestones </h1>
                        {/* <Suspense fallback={<SkeletonParagraph/>}> */}
                            <p className="text-base text-neutral-500 max-w-3xl"> 
                                {milestones}
                            </p>
                        {/* </Suspense> */}
                </div>
            </div>
                
         
           
    </>
  )
}

export default SlugGallry