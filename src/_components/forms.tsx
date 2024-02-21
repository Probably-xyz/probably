/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Popover, PopoverTrigger, PopoverContent } from "~/styles/ui/popover";
import { CalendarIcon, Check, CheckCircle2 } from "lucide-react";
import { Calendar } from "~/styles/ui/calendar";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ubuntu } from "~/lib/fonts";
import { cn } from "~/lib/utils";
import { Badge } from "~/styles/ui/badge";
import { Button } from "~/styles/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/styles/ui/form";
import { Input } from "~/styles/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/styles/ui/select";
import { Textarea } from "~/styles/ui/textarea";
import { api } from "~/trpc/react";
import { useRouter } from "next/router";
import { FaSpinner } from "react-icons/fa";
import { toast } from "sonner";
import { RadioGroup, RadioGroupItem } from "~/styles/ui/radio-group";

export const generalSchema = z.object({
  name: z.string().min(2),
  title: z.string(),
  status: z.string(),
  tagline: z.string().max(70),
  summary: z.string(),
});

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
  });

  const updateProfile = api.founder.updateProfile.useMutation({
    onSuccess: () => {
      toast.success("Proflile Updated!")
      window.location.reload()
    }
  });
  
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof generalSchema>) {
  
    updateProfile.mutate(values)

  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="p-3">
        <div className="relative z-10 h-fit w-full max-w-screen-md overflow-hidden border-y border-neutral-200 sm:rounded-md sm:border sm:shadow-md">
          <div className="border-b border-neutral-200 bg-neutral-50/10 px-8 py-6 pt-8">
            <div className="max-w-screen-md space-y-1">
              <h1 className="text-xl" style={ubuntu.style}>
                {" "}
                General{" "}
              </h1>
              <p className="font-light text-neutral-600">
                {" "}
                These details will be showcased to our network of investors
              </p>
            </div>
            <div className="mt-6 grid max-w-screen-md grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Jon Snow"
                        className="py-5"
                        {...field}
                      />
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
                      <Input
                        placeholder="Open source developer and founder"
                        className="py-5"
                        {...field}
                      />
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
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="py-5">
                          <SelectValue placeholder="Select one of the choices" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="finance">
                          <Badge className="bg-prblyPrimary hover:bg-prblyPrimary">
                            {" "}
                            Actively looking{" "}
                          </Badge>
                        </SelectItem>
                        <SelectItem value="design">
                          <Badge className="bg-prblyYellow text-neutral-700 hover:bg-prblyYellow">
                            {" "}
                            Open to offers{" "}
                          </Badge>
                        </SelectItem>

                        <SelectItem value="other">
                          <Badge variant="outline"> Busy </Badge>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mt-8 max-w-screen-md">
              <FormField
                control={form.control}
                name="summary"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel> Summary </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us a little bit about yourself"
                        className="h-[120px] resize-none"
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
            <Button type="submit" className="w-[145px]" disabled={updateProfile.isLoading}>
                {updateProfile.isLoading ? (
                  <FaSpinner className="animate-spin" />
                  ) : (
                  "Save"
                )}
            </Button>
            <Button
              className="w-[145px]"
              variant="outline"
              onClick={() => form.reset()}
            >
              {" "}
              Clear{" "}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
);

const socialSchema = z.object({
  linkedin: z.string().url(),
  github: z.string().url(),
  twitter: z.string().url(),
  phone: z.string().regex(phoneRegex, "Invalid Number!")
});

export function SocialsFounderForm() {
  const form = useForm<z.infer<typeof socialSchema>>({
    resolver: zodResolver(socialSchema),
    defaultValues: {
      linkedin: "",
      github: "",
      twitter: "",
      phone: "",
    },
  });

  const updateProfile = api.founder.updateSocials.useMutation();
  
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof socialSchema>) {
  
    updateProfile.mutate(values)

  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="p-3">
        <div className="relative z-10 h-fit w-full max-w-screen-md overflow-hidden border-y border-neutral-200 sm:rounded-md sm:border sm:shadow-md">
          <div className="border-b border-neutral-200 bg-neutral-50/10 px-8 py-6 pt-8">
            <div className="max-w-screen-md space-y-1">
              <h1 className="text-xl" style={ubuntu.style}>
                {" "}
                Socials{" "}
              </h1>
              <p className="font-light text-neutral-600">
                {" "}
                This is how investors and other founders can connect with you
                personally
              </p>
            </div>
            <div className="mt-6 grid max-w-screen-md grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="linkedin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Linkedin</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://linkedin.com/prbly"
                        className="py-5"
                        {...field}
                      />
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
                      <Input
                        placeholder="https://x.com/prbly"
                        className="py-5"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mt-6 grid max-w-screen-md grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="github"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Github</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://github.com/prbly"
                        className="py-5"
                        {...field}
                      />
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
                      <Input
                        placeholder="+00 999 999"
                        className="py-5"
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
            {updateProfile.isSuccess ? (
            <Button type="submit" variant="success" className="w-[145px]" disabled={updateProfile.isLoading}>
                <CheckCircle2 className="mr-2"/> Done
            </Button>
            ):( 
            <Button type="submit" className="w-[145px]" disabled={updateProfile.isLoading}>
            {updateProfile.isLoading ? (
              <FaSpinner className="animate-spin" />
              ) : (
              "Save"
            )}
            </Button>
          )}
            <Button
              className="w-[145px]"
              variant="outline"
              onClick={() => form.reset()}
            >
              {" "}
              Clear{" "}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}

const generalStartup = z.object({
  name: z.string().min(2),
  industry: z.string(),
  tagline: z.string().max(70),
  description: z.string().min(100),
  founded: z.date(),
  region: z.string(),
  lookingFor: z.string(),
  milestones: z.string().min(100),
  development: z.string(),
  stage: z.string(),
  teamSize: z.string(),
  teamDesc: z.string().min(50),
});

export function GeneralStartupForm() {
  const form = useForm<z.infer<typeof generalStartup>>({
    resolver: zodResolver(generalStartup),
    defaultValues: {
      name: "",
      industry: "",
      tagline: "",
      description: "",
      region: undefined,
      lookingFor: undefined,
      milestones: "",
      development: undefined,
      stage: undefined,
      teamSize: undefined,
      teamDesc: "",
    },
  });

  const createNew = api.startup.create.useMutation();
  
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof generalStartup>) {
  
    createNew.mutate(values)

  }
  // 2. Define a submit handler.


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="p-3">
        <div className="relative z-10 h-fit w-full max-w-screen-md overflow-hidden border-y border-neutral-200 sm:rounded-md sm:border sm:shadow-md">
          <div className="border-b border-neutral-200 bg-neutral-50/10 px-8 py-6 pt-8">
            <div className="max-w-screen-md space-y-1">
              <h1 className="text-xl" style={ubuntu.style}>
                {" "}
                General{" "}
              </h1>
              <p className="font-light text-neutral-600">
                {" "}
                This is how investors and other founders can connect with you
                personally
              </p>
            </div>
            <div className="mt-6 grid max-w-screen-md grid-cols-2 gap-6">
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
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="py-5">
                          <SelectValue placeholder="Select one of the choices" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="web3">
                          <Badge className="bg-prblyPrimary hover:bg-prblyPrimary">
                            {" "}
                            Web3{" "}
                          </Badge>
                        </SelectItem>
                        <SelectItem value="ar/vr">
                          <Badge className="bg-prblyPrimary hover:bg-prblyPrimary">
                            {" "}
                            AR/VR{" "}
                          </Badge>
                        </SelectItem>
                        <SelectItem value="health">
                          <Badge className="bg-prblyPrimary hover:bg-prblyPrimary">
                            {" "}
                            HealthTech{" "}
                          </Badge>
                        </SelectItem>
                        <SelectItem value="fintech">
                          <Badge className="bg-prblyPrimary hover:bg-prblyPrimary">
                            {" "}
                            FinTech{" "}
                          </Badge>
                        </SelectItem>
                        <SelectItem value="insur">
                          <Badge className="bg-prblyPrimary hover:bg-prblyPrimary">
                            {" "}
                            InsurTech{" "}
                          </Badge>
                        </SelectItem>
                        <SelectItem value="prop">
                          <Badge className="bg-prblyPrimary hover:bg-prblyPrimary">
                            {" "}
                            PropTech{" "}
                          </Badge>
                        </SelectItem>
                        <SelectItem value="financials">
                          <Badge className="bg-prblyYellow text-neutral-700 hover:bg-prblyYellow">
                            {" "}
                            Financial Services{" "}
                          </Badge>
                        </SelectItem>
                        <SelectItem value="ai">
                          <Badge className="bg-prblyPrimary hover:bg-prblyPrimary">
                            {" "}
                            AI{" "}
                          </Badge>
                        </SelectItem>
                        <SelectItem value="cybersec">
                          <Badge className="bg-prblyPrimary hover:bg-prblyPrimary">
                            {" "}
                            Cyber Security{" "}
                          </Badge>
                        </SelectItem>
                        <SelectItem value="mobility">
                          <Badge className="bg-prblyYellow text-neutral-700 hover:bg-prblyYellow">
                            {" "}
                            Mobility{" "}
                          </Badge>
                        </SelectItem>
                        <SelectItem value="ecom">
                          <Badge className="bg-prblyPrimary hover:bg-prblyPrimary">
                            {" "}
                            E-Commerce{" "}
                          </Badge>
                        </SelectItem>
                        <SelectItem value="space">
                          <Badge className="bg-prblyYellow text-neutral-700 hover:bg-prblyYellow">
                            Space{" "}
                          </Badge>
                        </SelectItem>
                        <SelectItem value="other">
                          <Badge variant="outline"> Other </Badge>
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
                      <Input
                        placeholder="A cool startup building stuff with AI"
                        className="py-5"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription> Max characters: 70 </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="founded"
                render={({ field }) => (
                  <FormItem className="flex flex-col py-[9.5px]">
                    <FormLabel>Founding Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "py-5",
                              !field.value && "text-muted-foreground",
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date: any) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="development"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> What stage are you on </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="py-5">
                          <SelectValue placeholder="Select one of the choices" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Ideation">
                          <Badge className="bg-prblyPrimary hover:bg-prblyPrimary">
                            Idea stage
                          </Badge>
                        </SelectItem>
                        <SelectItem value="MVP">
                          <Badge className="bg-prblyPrimary hover:bg-prblyPrimary">
                            MVP
                          </Badge>
                        </SelectItem>
                        <SelectItem value="Post-launch">
                          <Badge className="bg-prblyPrimary hover:bg-prblyPrimary">
                            Post-launch
                          </Badge>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="stage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> What investment stage are you on </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="py-5">
                          <SelectValue placeholder="Select one of the choices" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Pre-Seed">
                          <Badge className="bg-prblyPrimary hover:bg-prblyPrimary">
                            Pre-seed
                          </Badge>
                        </SelectItem>
                        <SelectItem value="Seed">
                          <Badge className="bg-prblyPrimary hover:bg-prblyPrimary">
                            Seed
                          </Badge>
                        </SelectItem>
                        <SelectItem value="Series A">
                          <Badge className="bg-prblyPrimary hover:bg-prblyPrimary">
                            Series A
                          </Badge>
                        </SelectItem>
                        <SelectItem value="Series B">
                          <Badge className="bg-prblyPrimary hover:bg-prblyPrimary">
                            Series B
                          </Badge>
                        </SelectItem>
                        <SelectItem value="Series C">
                          <Badge className="bg-prblyPrimary hover:bg-prblyPrimary">
                            Series C
                          </Badge>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="lookingFor"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> What are you looking for </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="py-5">
                          <SelectValue placeholder="Select one of the choices" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="co-founders">
                          <Badge className="bg-prblyPrimary hover:bg-prblyPrimary">
                            Finding co-founders
                          </Badge>
                        </SelectItem>
                        <SelectItem value="advisors / mentors">
                          <Badge className="bg-prblyPrimary hover:bg-prblyPrimary">
                            Advisors and/or mentors
                          </Badge>
                        </SelectItem>
                        <SelectItem value="investors">
                          <Badge className="bg-prblyPrimary hover:bg-prblyPrimary">
                            Investment
                          </Badge>
                        </SelectItem>
                        <SelectItem value="fintech">
                          <Badge className="bg-prblyPrimary hover:bg-prblyPrimary">
                            Marketing
                          </Badge>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="region"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> Region </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="py-5">
                          <SelectValue placeholder="Select one of the choices" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="EMEA">
                          <Badge className="bg-prblyYellow text-neutral-700 hover:bg-prblyYellow">
                            EMEA
                          </Badge>
                        </SelectItem>
                        <SelectItem value="MENA">
                          <Badge className="bg-prblyYellow text-neutral-700 hover:bg-prblyYellow">
                            MENA
                          </Badge>
                        </SelectItem>
                        <SelectItem value="NA">
                          <Badge className="bg-prblyPrimary hover:bg-prblyPrimary">
                            North America
                          </Badge>
                        </SelectItem>
                        <SelectItem value="LATAM">
                          <Badge className="bg-prblyPrimary hover:bg-prblyPrimary">
                            Latin America
                          </Badge>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
          <FormField
          control={form.control}
          name="teamSize"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel> How big is your team </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex space-x-3"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="1-10" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      1-10
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="11-50" />
                    </FormControl>
                    <FormLabel className="font-normal">
                     11-50
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="51-100" />
                    </FormControl>
                    <FormLabel className="font-normal"> 51-100 </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="100+" />
                    </FormControl>
                    <FormLabel className="font-normal"> 100+ </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
            </div>
            <div className="mt-8 max-w-screen-md">
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel> Summary </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={`Tell us more about your startup`}
                        className="h-[120px] resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mt-8 max-w-screen-md">
              <FormField
                control={form.control}
                name="teamDesc"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel> How is your team structured </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={`Tell us more about your team`}
                        className="h-[120px] resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mt-8 max-w-screen-md">
              <FormField
                control={form.control}
                name="milestones"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel> What are some milestones you've reached</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={`MVP developed, we raised $500M during our seed round in 2016. Later on, in 2018 we got accepted in the YC W18 batch.`}
                        className="h-[120px] resize-none"
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
          {createNew.isSuccess ? (
            <Button type="submit" variant="success" className="w-[145px]" disabled={createNew.isLoading}>
                <CheckCircle2 className="mr-2"/> Done
            </Button>
            ):( 
            <Button type="submit" className="w-[145px]" disabled={createNew.isLoading}>
            {createNew.isLoading ? (
              <FaSpinner className="animate-spin" />
              ) : (
              "Save"
            )}
            </Button>
          )}
            <Button
              className="w-[145px]"
              variant="outline"
              onClick={() => form.reset()}
            >
              {" "}
              Clear{" "}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
