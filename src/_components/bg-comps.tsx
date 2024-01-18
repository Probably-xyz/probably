"use client"

import React from 'react'

export const GridGradient = () => {
    return (
        <div className="fixed left-0 top-0 -z-10 h-full w-full">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:18px_28px]">
            <div className="absolute left-0 right-[300px] top-[350px] -z-10 m-auto h-[550px] w-[700px] rounded-full bg-prblyPrimary opacity-20 blur-[180px]" />
            </div>
        </div>
    )
}


export const GridBG = () => {
    return (
        <div className="fixed left-0 top-0 -z-10 h-full w-full">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:18px_28px]">
            </div>
        </div>
    )
}


export const HalfGrid = () => {
    return (
       <div className="fixed left-0 top-0 -z-10 h-full w-full">
           <div className="relative h-full w-full bg-transparent">
               <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_35%_at_50%_0%,#000_70%,transparent_110%)]"/>
           </div>
       </div>
    )   
}

export const BottomHalfGrid = () => {
     return (
        <div className="fixed left-0 top-0 -z-10 h-full w-full rotate-[180deg]">
            <div className="relative h-full w-full bg-transparent">
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_35%_at_50%_0%,#000_70%,transparent_110%)]"/>
            </div>
        </div>
     )   
}


