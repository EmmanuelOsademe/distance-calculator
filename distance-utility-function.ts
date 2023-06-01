import {Client, TravelMode, LatLng, UnitSystem} from "@googlemaps/google-maps-services-js";
const client = new Client({});


const calculateDistance = async (origins: LatLng[], destinations: LatLng[]) => {

    try {
        const result = await  client.distancematrix({params: {
            origins: origins,
            destinations: destinations,
            mode: TravelMode.driving,
            units: UnitSystem.metric,
            region: 'ng',
            key: process.env.GOOGLE_API_KEY as string
        }})
        
        return result.data;
    } catch (e: any) {
        console.log(e.message );
    }
}

export default calculateDistance;
