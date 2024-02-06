/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { ubuntu } from "~/lib/fonts"
import { Badge } from "~/styles/ui/badge"
import { Button } from "~/styles/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/styles/ui/form"
import { Input } from "~/styles/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/styles/ui/select"
import { Separator } from "~/styles/ui/separator"
import { Textarea } from "~/styles/ui/textarea"


const generalSchema = z.object({
  name: z.string().min(2),
  title: z.string(),
  status: z.string(),
  tagline: z.string(),
  summary: z.string(),
})

export function GeneralFounderForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof generalSchema>>({
    resolver: zodResolver(generalSchema),
    defaultValues: {
      name: "",
      title: "",
      status: undefined,
      tagline: "",
      summary: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof generalSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="p-3">
      <div className="relative z-10 h-fit w-full max-w-screen-md overflow-hidden border-y border-neutral-200 sm:rounded-md sm:border sm:shadow-md">
        <div className="border-b border-neutral-200 bg-neutral-50/10 px-8 py-6 pt-8">
            <div className="max-w-screen-md space-y-1">
                <h1 className="text-xl" style={ubuntu.style}> General </h1>
                <p className="text-neutral-600 font-light"> These details will be showcased to our network of investors</p>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-6 max-w-screen-md">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Full name</FormLabel>
                        <FormControl>
                            <Input placeholder="Jon Snow" className="py-5" {...field} />
                        </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel> Title </FormLabel>
                        <FormControl>
                            <Input placeholder="CEO" className="py-5" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />
                
                <FormField
                control={form.control}
                name="tagline"
                render={({ field }) => (
                    <FormItem className="">
                        <FormLabel> Tagline </FormLabel>
                        <FormControl>
                            <Input placeholder="Open source developer and founder" className="py-5" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />
                 <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                    <FormItem className="">
                        <FormLabel> Status </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger className="py-5">
                                    <SelectValue placeholder="Select one of the choices" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                <SelectItem value="finance"> 
                                    <Badge className="hover:bg-prblyPrimary bg-prblyPrimary"> Actively looking </Badge> 
                                </SelectItem>
                                <SelectItem value="design"> 
                                    <Badge className="hover:bg-prblyYellow bg-prblyYellow text-neutral-700"> Open to offers  </Badge> 
                                </SelectItem>
                                
                                <SelectItem value="other"> 
                                    <Badge variant="outline"> Busy  </Badge> 
                                </SelectItem>
                            </SelectContent>
                        </Select>
                        <FormMessage />
                    </FormItem>
                )}
                />
               
            </div>
            <div className="max-w-screen-md mt-8">
                    <FormField
                    control={form.control}
                    name="summary"
                    render={({ field }) => (
                        <FormItem className="">
                            <FormLabel> Summary </FormLabel>
                            <FormControl>
                            <Textarea
                                placeholder="Tell us a little bit about yourself"
                                className="resize-none h-[120px]"
                                {...field}
                            />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>
        </div>
        <div className="flex space-x-3 bg-neutral-100 px-8 py-7">   
            <Button className="w-[145px]"> Save </Button>
            <Button className="w-[145px]" variant="outline" onClick={() => form.reset()}> Reset </Button>
        </div>
        </div>
            
    
      </form>
    </Form>
  )
}

const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
  );

const socialSchema = z.object({
   linkedin: z.string().url(),
   github: z.string().url(),
   twitter: z.string().url(),
   phone: z.string().regex(phoneRegex, 'Invalid Number!'),
  })

export function SocialsFounderForm() {
    const form = useForm<z.infer<typeof socialSchema>>({
        resolver: zodResolver(socialSchema),
        defaultValues: {
          linkedin: "",
          github: "",
          twitter: "",
          phone: "",
        },
      })
    
      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof socialSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }

      return (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="p-3">
          <div className="relative z-10 h-fit w-full max-w-screen-md overflow-hidden border-y border-neutral-200 sm:rounded-md sm:border sm:shadow-md">
            <div className="border-b border-neutral-200 bg-neutral-50/10 px-8 py-6 pt-8">
                <div className="max-w-screen-md space-y-1">
                    <h1 className="text-xl" style={ubuntu.style}> Socials </h1>
                    <p className="text-neutral-600 font-light"> This is how investors and other founders can connect with you personally</p>
                </div>
                <div className="grid grid-cols-2 gap-6 mt-6 max-w-screen-md">
                    <FormField
                        control={form.control}
                        name="linkedin"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Linkedin</FormLabel>
                            <FormControl>
                                <Input placeholder="https://linkedin.com/prbly" className="py-5" {...field} />
                            </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                     <FormField
                        control={form.control}
                        name="twitter"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>X</FormLabel>
                            <FormControl>
                                <Input placeholder="https://x.com/prbly" className="py-5" {...field} />
                            </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    
                </div>
                <div className="grid grid-cols-2 gap-6 mt-6 max-w-screen-md">
                <FormField
                        control={form.control}
                        name="github"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Github</FormLabel>
                            <FormControl>
                                <Input placeholder="https://github.com/prbly" className="py-5" {...field} />
                            </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                     <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel> Phone </FormLabel>
                            <FormControl>
                                <Input placeholder="+00 999 999" className="py-5" {...field} />
                            </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>
            </div>
            <div className="flex space-x-3 bg-neutral-100 px-8 py-7">   
                <Button className="w-[145px]" type="submit"> Save </Button>
                <Button className="w-[145px]" variant="outline" onClick={() => form.reset()}> Reset </Button>
            </div>
            </div>
                
        
          </form>
        </Form>
      )
}


const generalStartup = z.object({
    name: z.string().min(2),
    industry: z.string(),
    invStage: z.string(),
    goal: z.string(),
    tagline: z.string().max(70),
    description: z.string().min(150),
    region: z.string(),
    looking: z.string(),
    linkedin: z.string().url(),
    github: z.string().url(),
    twitter: z.string().url(),
    phone: z.string().regex(phoneRegex, 'Invalid Number!'),
   })
 
 export function GeneralStartupForm() {
     const form = useForm<z.infer<typeof generalStartup>>({
         resolver: zodResolver(generalStartup),
         defaultValues: {
            name: "",
            industry: "",
            invStage: "",
            tagline: "",
            description: "",
            goal: "",
            region: "",
            looking: "",
         },
       })
     
       // 2. Define a submit handler.
       function onSubmit(values: z.infer<typeof generalStartup>) {
         // Do something with the form values.
         // ✅ This will be type-safe and validated.
         console.log(values)
       }
 
       return (
         <Form {...form}>
           <form onSubmit={form.handleSubmit(onSubmit)} className="p-3">
           <div className="relative z-10 h-fit w-full max-w-screen-md overflow-hidden border-y border-neutral-200 sm:rounded-md sm:border sm:shadow-md">
             <div className="border-b border-neutral-200 bg-neutral-50/10 px-8 py-6 pt-8">
                 <div className="max-w-screen-md space-y-1">
                     <h1 className="text-xl" style={ubuntu.style}> General </h1>
                     <p className="text-neutral-600 font-light"> This is how investors and other founders can connect with you personally</p>
                 </div>
                 <div className="grid grid-cols-2 gap-6 mt-6 max-w-screen-md">
                     <FormField
                         control={form.control}
                         name="name"
                         render={({ field }) => (
                         <FormItem>
                             <FormLabel>Project name</FormLabel>
                             <FormControl>
                                 <Input placeholder="Prbly" className="py-5" {...field} />
                             </FormControl>
                         <FormMessage />
                         </FormItem>
                     )}
                     />
                      <FormField
                         control={form.control}
                         name="industry"
                         render={({ field }) => (
                         <FormItem>
                             <FormLabel> Industry </FormLabel>
                             <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger className="py-5">
                                    <SelectValue placeholder="Select one of the choices" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                <SelectItem value="web3"> 
                                    <Badge className="hover:bg-prblyPrimary bg-prblyPrimary"> Web3 </Badge> 
                                </SelectItem>
                                <SelectItem value="ar/vr"> 
                                    <Badge className="hover:bg-prblyPrimary bg-prblyPrimary"> AR/VR </Badge> 
                                </SelectItem>
                                <SelectItem value="health"> 
                                    <Badge className="hover:bg-prblyPrimary bg-prblyPrimary"> HealthTech </Badge> 
                                </SelectItem>
                                <SelectItem value="fintech"> 
                                    <Badge className="hover:bg-prblyPrimary bg-prblyPrimary"> FinTech </Badge> 
                                </SelectItem>
                                <SelectItem value="insur"> 
                                    <Badge className="hover:bg-prblyPrimary bg-prblyPrimary"> InsurTech </Badge> 
                                </SelectItem>
                                <SelectItem value="prop"> 
                                    <Badge className="hover:bg-prblyPrimary bg-prblyPrimary"> PropTech </Badge> 
                                </SelectItem>
                                <SelectItem value="financials"> 
                                    <Badge className="hover:bg-prblyYellow bg-prblyYellow text-neutral-700"> Financial Services  </Badge> 
                                </SelectItem>
                                <SelectItem value="ai"> 
                                    <Badge className="hover:bg-prblyPrimary bg-prblyPrimary"> AI </Badge> 
                                </SelectItem>
                                <SelectItem value="cybersec"> 
                                    <Badge className="hover:bg-prblyPrimary bg-prblyPrimary"> Cyber Security </Badge> 
                                </SelectItem>
                                <SelectItem value="mobility"> 
                                    <Badge className="hover:bg-prblyYellow bg-prblyYellow text-neutral-700"> Mobility  </Badge> 
                                </SelectItem>
                                <SelectItem value="ecom"> 
                                    <Badge className="hover:bg-prblyPrimary bg-prblyPrimary"> E-Commerce </Badge> 
                                </SelectItem>
                                <SelectItem value="space"> 
                                    <Badge className="hover:bg-prblyYellow bg-prblyYellow text-neutral-700">Space  </Badge> 
                                </SelectItem>
                                <SelectItem value="other"> 
                                    <Badge variant="outline"> Busy  </Badge> 
                                </SelectItem>
                            </SelectContent>
                        </Select>
                        <FormMessage />
                         </FormItem>
                     )}
                     />
                      <FormField
                         control={form.control}
                         name="tagline"
                         render={({ field }) => (
                         <FormItem>
                             <FormLabel> Tagline </FormLabel>
                             <FormControl>
                                 <Input placeholder="A cool startup building stuff with AI" className="py-5" {...field} />
                             </FormControl>
                             <FormDescription> Max characters: 70 </FormDescription>
                         <FormMessage />
                         </FormItem>
                     )}
                     />
                     <FormField
                         control={form.control}
                         name="tagline"
                         render={({ field }) => (
                         <FormItem>
                             <FormLabel> Tagline </FormLabel>
                             <FormControl>
                                 <Input placeholder="A cool startup building stuff with AI" className="py-5" {...field} />
                             </FormControl>
                             <FormDescription> Max characters: 70 </FormDescription>
                         <FormMessage />
                         </FormItem>
                     )}
                     />
                 </div>
             </div>
             <div className="flex space-x-3 bg-neutral-100 px-8 py-7">   
                 <Button className="w-[145px]" type="submit"> Save </Button>
                 <Button className="w-[145px]" variant="outline" onClick={() => form.reset()}> Reset </Button>
             </div>
             </div>
                 
         
           </form>
         </Form>
       )
 }
 
