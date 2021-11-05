import {useEffect} from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoianVzdGludHlzIiwiYSI6ImNrdmxvOG8yejFjdGwydW10bDY3dW9hc28ifQ.gKl_634hofVrBrxI4DnkMg';

const Map = () => {


    useEffect(() => {
        const map = new mapboxgl.Map({
          container: "map",
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [-99.29011, 39.39172],
          zoom: 3
        })
      })

    return (
        <Wrapper id='map'>
            
        </Wrapper>
    )
}

export default Map

const Wrapper = tw.div`
flex-1
`