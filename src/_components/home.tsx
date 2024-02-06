import React from 'react'
import { FavGrid, MyGrid } from './startups'

export const Favorites = () => {
  return (
    <div className="flex flex-col space-y-5">
        <h1 className="text-2xl"> Favorites </h1>
        <FavGrid/>
    </div>
  )
}


export const MyStartups = () => {
  return (
    <div className="flex flex-col space-y-5">
        <h1 className="text-2xl"> My startups </h1>
        <MyGrid/>
    </div>
  )
}

