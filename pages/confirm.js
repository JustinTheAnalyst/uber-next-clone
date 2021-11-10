import {useEffect, useState} from 'react'
import tw from "tailwind-styled-components"
import Map from './components/Map'
import { useRouter } from 'next/router'
import RideSelector from './components/RideSelector'

const Confirm = () => {

    const router = useRouter()
    const {pickup, dropoff} = router.query

    const [pickupCoordinates, setPickupCoordinates] = useState()
    const [dropoffCoordinates, setDropoffCoordinates] = useState()

    const getPickupCoordinates = (pickup) => {

        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
            new URLSearchParams({
                access_token: "pk.eyJ1IjoianVzdGludHlzIiwiYSI6ImNrdmxvOG8yejFjdGwydW10bDY3dW9hc28ifQ.gKl_634hofVrBrxI4DnkMg",
                limit: 1
            })
        )
        .then(response => response.json())
        .then(data => {
            setPickupCoordinates(data.features[0].center)
        })
    }

    const getDropOffCoordinates = (dropoff) => {

        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
            new URLSearchParams({
                access_token: "pk.eyJ1IjoianVzdGludHlzIiwiYSI6ImNrdmxvOG8yejFjdGwydW10bDY3dW9hc28ifQ.gKl_634hofVrBrxI4DnkMg",
                limit: 1
            })
        )
        .then(response => response.json())
        .then(data => {
            setDropoffCoordinates(data.features[0].center)
        })
    }

    useEffect(() => {
        getPickupCoordinates(pickup);
        getDropOffCoordinates(dropoff);
    }, [pickup, dropoff])

    return (
        <Wrapper>
            <Map 
                pickupCoordinates={pickupCoordinates}
                dropoffCoordinates={dropoffCoordinates}
            />
            <RightContainer>
                <RideSelector />

                <ConfirmButtonContainer>
                    <ConfirmButton>Confirm UberX</ConfirmButton>
                </ConfirmButtonContainer>
            </RightContainer>
        </Wrapper>
    )
}

export default Confirm

const ConfirmButton = tw.div`
bg-black text-white my-4 mx-4 py-4 text-center text-xl cursor-pointer
`
const ConfirmButtonContainer = tw.div`
border-t-2
`
const Wrapper = tw.div`
flex h-screen flex-col
`
const RightContainer = tw.div`
flex-1 flex flex-col h-1/2
`
