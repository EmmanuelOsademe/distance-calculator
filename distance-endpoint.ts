import calculateDistance from "@/util/backend/google";
import type { NextApiRequest, NextApiResponse, NextApiHandler } from "next";
import { LatLng } from "use-places-autocomplete";

/**
 * 
 * Receives the destination as an array
 */


const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {

    const {method, query} = req;

    const destination = req.body.destination as LatLng[];
    const origin = [{lat: 5.544230 , lng: 5.760269}] as LatLng[]

    
    if(method === "POST"){
        try {
           const distances = await calculateDistance(origin, destination);
           console.log(distances);
           res.status(200).json(distances);
        } catch (e: any) {
            console.log(e)
            res.status(500).json({msg: e.message});
        }
    }
}

export default handler;