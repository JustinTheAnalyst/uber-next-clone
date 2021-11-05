import React, { useEffect } from "react";
import Head from 'next/head'
import Image from 'next/image'
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoianVzdGludHlzIiwiYSI6ImNrdmxvOG8yejFjdGwydW10bDY3dW9hc28ifQ.gKl_634hofVrBrxI4DnkMg';

export default function Home() {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-99.29011, 39.39172],
      zoom: 3
    })
  })

  return (
    <Wrapper>
      <Map id="map"></Map>  
      <ActionItems>Start</ActionItems>
    </Wrapper>
  )
}


const Wrapper = tw.div`
  flex flex-col bg-red-300 h-screen
`

const Map = tw.div`
  bg-red-500 flex-1
`

const ActionItems = tw.div`
  flex-1
`