import React from 'react'
import { GeneralStartupForm } from '~/_components/forms'
import { TopDashNav } from '~/_components/nav'

const CreateStartup = () => {
  return (
    <>
        <TopDashNav title="Create new startup"/>
        <GeneralStartupForm/>
    </>
  )
}

export default CreateStartup