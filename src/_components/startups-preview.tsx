import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaDollarSign } from 'react-icons/fa'
import { ubuntu } from '~/lib/fonts'
import { Badge } from '~/styles/ui/badge'
import { Card } from '~/styles/ui/card'

export function PreviewCard(){
    return (
        <Link href="">
            <Card className="rounded-md hover:shadow-lg transition-all ease-in w-[400px]">
           <div className="flex flex-col px-4 py-3 space-y-4">
                <div className="flex justify-between">
                    <div className='flex space-x-2'>
                        <Image className='my-auto' src="/5.png" width={30} height={30} alt={''}/>
                        <h1 className="my-auto text-lg" style={ubuntu.style}> Mirathi - <span className="text-sm text-neutral-400"> Founded 2022 </span></h1>
                    </div>
                    <HamburgerMenuIcon className="w-4 h-4 my-auto"/>
                </div>
                <div className="flex space-x-4 text-sm text-muted-foreground">
                    <Badge variant="secondary" className="flex items-center">
                    Seed
                    </Badge>
                    <Badge variant="outline">
                        🇱🇧 LB
                    </Badge>
                    <div className="flex items-center text-prblyPrimary">
                        <FaDollarSign className="h-3 w-3" />
                        750k
                    </div>
                </div>
            </div>
        </Card>
        </Link>
    )
}