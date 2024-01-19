import React from 'react'
import { inter, ubuntu } from '~/lib/fonts'

const Mainfesto = () => {
  return (
    <div className="container flex flex-col pb-20">
        <div className="mx-auto">
            <p className="text-slate-400 italic font-normal text-center" style={inter.style}> Our Manifesto </p>
            <h1 className="md:text-6xl text-3xl text-center mt-2 font-medium" style={inter.style}> At the precipice of <br/> startup evolution </h1>
        </div>

        <div className="md:w-[48%] mx-auto pt-14 px-10">
            <h1 className="text-left text-prblyPrimary font-medium text-base" style={ubuntu.style}> Evolution not revolution </h1>
            <p className="mt-6 md:text-base text-xs font-light text-slate-600 dark:text-slate-300">In a world full of noise, talk, unrealized dreams, over estimated expectations, and underestimated creators. We forgot about the essence of what startups are. They aren’t numbers, a dot on the line, or the next investment opportunity. But rather they are the corpuscles of life, flowing through stone, metal, water, and air of cities. Breathing, breeding life. Creating opportunities, creating families, and creating chances. <br/> <br/>

            We believe in equal opportunities - that multiply competition. We believe in communities - that create chances. We believe in support systems - that generate results. We believe that when an individual, ambitious enough, passionate enough, smart enough wants to create something from nothing, they need to be supported. <br/> <br/>

            If they don’t get the support, the dream ends. We want dreams to become reality. We aren’t a business model and we aren’t a charity. We are the ones who are there when needed. Operating in the shadows - changing the game, step by step. <br/> <br />

            This is evolution, not revolution.
            <br/> <br/>

            A message by Probably.
            </p>
        </div>
    </div>
  )
}

export default Mainfesto