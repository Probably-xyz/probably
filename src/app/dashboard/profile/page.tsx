import React from 'react'
import { GeneralFounderForm, SocialsFounderForm } from '~/_components/forms'
import { TopDashNav } from '~/_components/nav'

const Profile = () => {
  return (
    <>
      <TopDashNav title="Profile bye"/>
      <GeneralFounderForm/>
      <SocialsFounderForm/>
    </>
  )
}

export default Profile