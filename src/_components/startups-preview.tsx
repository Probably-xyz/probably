/* eslint-disable react/no-unescaped-entities */
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import React from 'react'
import { FaDollarSign } from 'react-icons/fa'
import { ubuntu } from '~/lib/fonts'
import { Badge } from '~/styles/ui/badge'
import { Button } from '~/styles/ui/button'
import { Card } from '~/styles/ui/card'
import { Dialog, DialogContent, DialogFooter, DialogTrigger } from '~/styles/ui/dialog'
import { Separator } from '~/styles/ui/separator'

export function PreviewCardOne(){
    return (
        <Dialog>     
            <Card className="rounded-md hover:shadow-lg transition-all ease-in w-[430px]">
                <div className="flex flex-col px-4 py-3 space-y-4">
                    <div className="flex justify-between">
                        <div className='flex space-x-2'>
                            <Image className='my-auto' src="/6.jpg" width={50} height={50} alt={''}/>
                            <h1 className="my-auto text-lg" style={ubuntu.style}> Tylleum - <span className="text-sm text-neutral-400"> Founded 2022 </span></h1>
                        </div>
                        <DialogTrigger asChild>
                            <HamburgerMenuIcon className="w-5 h-5 my-auto cursor-pointer"/>
                        </DialogTrigger>
                    </div>
                    <div className="flex space-x-4 text-sm text-muted-foreground">
                        <Badge variant="secondary" className="flex items-center">
                            Seed
                        </Badge>
                        <Badge variant="secondary" className="flex items-center">
                            AI
                        </Badge>
                        <Badge variant="outline">
                            🇱🇧 LB
                        </Badge>
                    </div>
                </div>
            </Card>
            <DialogContent className="max-w-screen-lg flex flex-col outline outline-prblyPrimary max-h-[800px] overflow-scroll rounded-md">
                <div className="items-center flex flex-col justify-center"> 
                    <Image src="/6.jpg" width={80} height={80} alt=""/>
                    <h1 style={ubuntu.style} className="my-auto text-lg mt-3 mb-1"> Tyelleum </h1>
                    <h1 style={ubuntu.style} className="my-auto text-neutral-600 mb-1">
                        Crypto payments made easier
                    </h1>
                    <span className="text-sm my-auto text-neutral-500 font-normal"> Founded 2022 </span>
                </div>
                <Separator/>
                <div className="p-5 flex justify-between max-w-4xl">
                    <div className='flex flex-col space-y-4'>
                        <h1 className="text-xl" style={ubuntu.style}> Overview </h1>
                        <div className="flex space-x-4 text-sm text-muted-foreground">
                            <Badge className="flex items-center">
                                Looking for marketing and funding
                            </Badge>
                            <Badge className="flex items-center">
                                MVP
                            </Badge>
                            <Badge variant="secondary" className="flex items-center">
                                Pre-seed
                            </Badge>
                            <Badge variant="secondary" className="flex items-center">
                                FinTech
                            </Badge>
                            <Badge variant="outline" className="flex items-center">
                                🇱🇧 LB
                            </Badge>
                            <div className="flex items-center text-prblyPrimary">
                                <FaDollarSign className="h-3 w-3" />
                                200K
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col px-5 pt-3 space-y-3">
                        <h1 className="text-xl" style={ubuntu.style}> Description </h1>
                        <p className="text-sm text-neutral-500 max-w-3xl"> Tylleum is a crypto payment app designed to enhance the       efficiency of
                            cryptocurrency payments for merchants and customers driving crypto adoption and digital payments in Lebanon and the Arab region. <br/> <br/> Our app offers a range of features to simplify the payment process for merchants, including the ability to create invoices, manage employees, track transactions, and cash out. <br/> <br/> These features will help merchants streamline their payment process, allowing them to focus on their core business activities. <br/> <br/> Customers on the other hand, can enjoy a social eco-system, easy payment process, spending tracking, and points-rewards system.</p>
                </div>
                <div className="flex flex-col px-5 pt-3 space-y-3">
                        <h1 className="text-xl" style={ubuntu.style}> Milestones </h1>
                        <p className="text-sm text-neutral-500 max-w-3xl"> 
                        During our Beta release, we had 50 users with 13 onboarded merchants, a total of about 150 payments were done through the app. We're expecting to onboard a minimum of 70 merchants by the end of June, and attain a 1000 users.
                        </p>
                </div>
                <DialogFooter className="flex mx-auto items-center pt-10">
                <Button>
                    View more
                </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export function PreviewCardTwo(){
    return (
        <Dialog>     
            <Card className="rounded-md hover:shadow-lg transition-all ease-in w-[430px]">
                <div className="flex flex-col px-4 py-3 space-y-4">
                    <div className="flex justify-between">
                        <div className='flex space-x-2'>
                            <Image className='my-auto' src="/7.png" width={50} height={50} alt={''}/>
                            <h1 className="my-auto text-lg" style={ubuntu.style}> Cyto-Clone </h1>
                        </div>
                        <DialogTrigger asChild>
                            <HamburgerMenuIcon className="w-5 h-5 my-auto cursor-pointer"/>
                        </DialogTrigger>
                    </div>
                    <div className="flex space-x-4 text-sm text-muted-foreground">
                        <Badge variant="secondary" className="flex items-center">
                            Pre-seed
                        </Badge>
                        <Badge variant="secondary" className="flex items-center">
                            HealthTech
                        </Badge>
                        <Badge variant="outline">
                            🇺🇸 USA
                        </Badge>
                    </div>
                </div>
            </Card>
            <DialogContent className="max-w-screen-lg flex flex-col outline outline-prblyPrimary max-h-[800px] overflow-scroll rounded-md">
                <div className="items-center flex flex-col justify-center"> 
                    <Image src="/7.png" width={80} height={80} alt=""/>
                    <h1 style={ubuntu.style} className="my-auto text-lg mt-3 mb-1"> Cyto-Clone </h1>
                    <h1 style={ubuntu.style} className="my-auto text-neutral-600 mb-1 text-center max-w-2xl">
                    Cyto-clone is the first company aiming to mass produce transgenic animals for the livestock and animal companion industry through high-throughput cloning.
                    </h1>
                    {/* <span className="text-sm my-auto text-neutral-500 font-normal"> Founded 2022 </span> */}
                </div>
                <Separator/>
                <div className="p-5 flex justify-between max-w-4xl">
                    <div className='flex flex-col space-y-4'>
                        <h1 className="text-xl" style={ubuntu.style}> Overview </h1>
                        <div className="flex space-x-4 text-sm text-muted-foreground">
                            <Badge className="flex items-center">
                                Looking for networking, marketing, and funding
                            </Badge>
                            <Badge className="flex items-center">
                                Ideation
                            </Badge>
                            <Badge variant="secondary" className="flex items-center">
                                Pre-seed
                            </Badge>
                            <Badge variant="secondary" className="flex items-center">
                                HealthTech
                            </Badge>
                            <Badge variant="outline" className="flex items-center">
                                🇺🇸 USA
                            </Badge>
                            <div className="flex items-center text-prblyPrimary">
                                <FaDollarSign className="h-3 w-3" />
                                500K
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col px-5 pt-3 space-y-3">
                        <h1 className="text-xl" style={ubuntu.style}> Description </h1>
                        <p className="text-sm text-neutral-500 max-w-3xl"> 
                            We have developed a novel platform for high-throughput cloning that allows us to produce 100's of transgenic embryos in an hour. <br/> <br/> This will allow us to scale to the millions of animals per year needed to meet demand in the $200B animal production industry. 
                        </p>
                </div>
                <div className="flex flex-col px-5 pt-3 space-y-3">
                        <h1 className="text-xl" style={ubuntu.style}> Milestones </h1>
                        <p className="text-sm text-neutral-500 max-w-3xl"> 
                        Currently have engineering prototype in manufacturing and testing process.
                        </p>
                </div>
                <DialogFooter className="flex mx-auto items-center pt-10">
                <Button>
                    View more
                </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export function PreviewCardThree(){
    return (
        <Dialog>     
            <Card className="rounded-md hover:shadow-lg transition-all ease-in w-[430px]">
                <div className="flex flex-col px-4 py-4 space-y-4">
                    <div className="flex justify-between">
                        <div className='flex space-x-2 mb-3'>
                            <Image className='my-auto' src="/8.png" width={50} height={50} alt={''}/>
                            <h1 className="my-auto text-lg" style={ubuntu.style}> Savii - <span className="text-sm text-neutral-400"> Founded 2021 </span></h1>
                        </div>
                        <DialogTrigger asChild>
                            <HamburgerMenuIcon className="w-5 h-5 my-auto cursor-pointer"/>
                        </DialogTrigger>
                    </div>
                    <div className="flex space-x-4 text-sm text-muted-foreground">
                        <Badge variant="secondary" className="flex items-center">
                            Pre-Seed
                        </Badge>
                        <Badge variant="secondary" className="flex items-center">
                            FinTech
                        </Badge>
                        <Badge variant="outline">
                            🇱🇧 LB
                        </Badge>
                    </div>
                </div>
            </Card>
            <DialogContent className="max-w-screen-lg flex flex-col outline outline-prblyPrimary max-h-[800px] overflow-scroll rounded-md">
                <div className="items-center flex flex-col justify-center"> 
                    <Image src="/8.png" width={80} height={80} alt=""/>
                    <h1 style={ubuntu.style} className="my-auto text-lg mt-3 mb-1"> Savii </h1>
                    <h1 style={ubuntu.style} className="my-auto text-neutral-600 mb-1">
                        Helping gen z become financially fearless                    
                    </h1>
                    <span className="text-sm my-auto text-neutral-500 font-normal"> Founded 2021 </span>
                </div>
                <Separator/>
                <div className="p-5 flex justify-between max-w-4xl">
                    <div className='flex flex-col space-y-4'>
                        <h1 className="text-xl" style={ubuntu.style}> Overview </h1>
                        <div className="flex space-x-4 text-sm text-muted-foreground">
                            <Badge className="flex items-center">
                                Looking for funding, advisors & mentors, mental wellness
                            </Badge>
                            <Badge className="flex items-center">
                                Post-launch
                            </Badge>
                            <Badge variant="secondary" className="flex items-center">
                                Pre-seed
                            </Badge>
                            <Badge variant="secondary" className="flex items-center">
                                FinTech
                            </Badge>
                            <Badge variant="outline" className="flex items-center">
                                🇧🇭 BH
                            </Badge>
                            <div className="flex items-center text-prblyPrimary">
                                <FaDollarSign className="h-3 w-3" />
                                1M
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col px-5 pt-3 space-y-3">
                        <h1 className="text-xl" style={ubuntu.style}> Description </h1>
                        <p className="text-sm text-neutral-500 max-w-3xl"> 
                        Savii goes beyond just financial education – it's a comprehensive banking solution and spending card tailored specifically for youth.
                        
                        <br/> <br/> Our aim is to empower young individuals to become financially savvy, equipping them with the tools and knowledge to earn, spend, save, and invest responsibly. 
                        </p>
                </div>
                <div className="flex flex-col px-5 pt-3 space-y-3">
                        <h1 className="text-xl" style={ubuntu.style}> Milestones </h1>
                        <p className="text-sm text-neutral-500 max-w-3xl"> 
                        Closed $540k of our $1m pre-seed round.
                        <br/><br/>
                        Successful public beta launch and early traction in the UAE: User confidence is growing with increased monthly fund loads and transaction volumes.
                        <br/><br/>

                        Rapid user adoption: We’ve built a waitlist of 4,000+ teenagers without spending a dollar on user acquisition.
                        <br/><br/>

                        Education initiatives: Besides our financial services, we've launched money management workshops for teens and are actively exploring partnerships with schools to integrate our content into their curriculum.
                        </p>
                </div>
                <DialogFooter className="flex mx-auto items-center pt-10">
                <Button>
                    View more
                </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}