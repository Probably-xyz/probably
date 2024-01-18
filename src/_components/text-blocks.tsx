import React from 'react'
import {inter, ubuntu} from "~/lib/fonts"

interface TextProps {
    content: string,
}

export const MainHeader = ({content}: TextProps) => {
    return (
        <h1 className="text-6xl font-medium text-left leading-tight" style={ubuntu.style}> 
            {content}
        </h1>
  )
}

export const XlHeader = ({content}: TextProps) => {
    return (
        <h1 className="text-7xl font-medium text-center leading-tight" style={ubuntu.style}> 
            {content}
        </h1>
  )
}

export const XlSub = ({content}: TextProps) => {
    return (
        <p className="text-xl text-slate-400 text-center" style={inter.style}> 
            {content}
        </p>
    )
}

export const SubHeader = ({content}: TextProps) => {
    return (
        <p className="text-lg text-slate-400 text-left" style={inter.style}> 
            {content}
        </p>
    )
}


