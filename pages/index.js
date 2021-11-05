import React, { useEffect } from "react";
import Head from 'next/head'
import Image from 'next/image'
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl'
import Map from './components/Map'

export default function Home() {
  

  return (
    <Wrapper>
      <Map />
      <ActionItems>
        {/* Header */}
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
          <Profile>

            <Name>Justin Tay</Name>
            <UserImage src="https://by3301files.storage.live.com/y4mcsqB5IkroRFwd1-vWgTk4LKd6Amjer0Vw4vGQj_NOlm6auUiGSp0BjG5A1ycCqytsOTeHavSJP-zvN0mrNvbYJ6lqTKqNAo3BT_-jbEIno87AK2wyzzstGDW3Q_JGI_cO1BdocGLauR4t_aOlEV1LoJHfLrIG5GnT29KaHnbHpB_6e1eKptBVMguqgPUPzR6?width=1024&height=957&cropmode=none" /> 
          </Profile>
        </Header>

        {/* Action Buttons */}
        <ActionButtons>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />Ride</ActionButton>
          <ActionButton>Wheels</ActionButton>
          <ActionButton>Reserve</ActionButton>

        </ActionButtons>

      </ActionItems>

      
    </Wrapper>
  )
}


const Wrapper = tw.div`
  flex flex-col h-screen
`

const ActionItems = tw.div`
  flex-1 p-4
`

const Header = tw.div`
  flex justify-between items-center
`
const UberLogo = tw.img`
h-28
`

const Profile = tw.div`
  flex items-center
`

const Name = tw.div`
  mr-4 w-20 text-sm
`

const UserImage = tw.img`
  h-12 w-12 rounded-full border-gray-200 p-px
`

const ActionButtons = tw.div`
  flex
`

const ActionButton = tw.div`
  bg-gray-200 flex-1 m-1 h-32
`
const ActionButtonImage = tw.img`
  h-3/5
`