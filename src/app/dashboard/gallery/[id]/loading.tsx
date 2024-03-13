import React from 'react'
import { SkeletonLong, SkeletonParagraph, SkeletonSlugImage, SkeletonSlugTitle } from '~/_components/skeletons'
import { ubuntu } from '~/lib/fonts'
import { Separator } from '~/styles/ui/separator'

const Loading = () => {
  return (

    <>
    <div className="w-full flex flex-col overflow-scroll p-10">
      <div className="flex justify-between">
          <div className="flex flex-col mb-3 max-w-lg"> 

               <div className="w-16 h-16 items-center flex">


                  {/* <Suspense fallback={<SkeletonSlugImage/>}> */}
                      <SkeletonSlugImage/>
                  {/* </Suspense> */}
                  
              </div>
              {/* <Suspense fallback={<SkeletonSlugTitle/>}> */}
                  <div className="my-auto text-lg pt-6"> <SkeletonSlugTitle/> </div>
                  <div className="my-auto text-lg pt-6"> <SkeletonSlugTitle/> </div>
              {/* </Suspense> */}
              

          </div>
          
          <div className="flex flex-col space-y-4 text-sm text-muted-foreground justify-center my-auto mt-20">
              {/* <Suspense fallback={<SkeletonLong/>}> */}
                  <div className="flex flex-row space-x-4">
                    
                          <SkeletonLong/>
                  </div>
                  <div className="flex flex-row space-x-4">
                      <SkeletonLong/>
                  </div>  
              {/* </Suspense>        */}
          </div>
             
      </div>
          
          <Separator/>

          <div className="flex flex-col mt-10">
         
                  <h1 className="text-2xl mb-12" style={ubuntu.style}> Overview </h1>

             
                  <h1 className="text-xl mb-1" style={ubuntu.style}> Description </h1>
                  {/* <Suspense fallback={<SkeletonParagraph/>}> */}
                     <SkeletonParagraph/>
                  {/* </Suspense> */}
                 

                 
                  <h1 className="text-xl mb-1" style={ubuntu.style}> Milestones </h1>
                  {/* <Suspense fallback={<SkeletonParagraph/>}> */}
                      <SkeletonParagraph/>
                  {/* </Suspense> */}

                  <h1 className="text-xl mb-1" style={ubuntu.style}> Core team </h1>
                  
                     <SkeletonParagraph/>
          </div>
      </div>
          
   
     
</>
                
  )
}

export default Loading