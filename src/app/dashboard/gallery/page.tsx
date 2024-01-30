"use client"

import { TopDashNav } from "~/_components/nav";
import { api } from "~/trpc/react";

export default function Gallery ()  {

  const getStartups = api.startup.getAll.useQuery
  
  
    return (
      <>
        <TopDashNav title="Gallery"/>
        <div className="grid grid-cols-3">
          
        </div>
      </>
    );
  }


