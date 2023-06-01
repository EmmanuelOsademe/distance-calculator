import type { NextApiRequest, NextApiResponse, NextApiHandler } from "next";

/*
 Get the GOOGLE_API_KEY and send it to the front-end. It us used by the places API for auto-suggestions of places.
*/

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    const {method} = req;

    if(method === "GET"){
        try {
           const apiKey = process.env.GOOGLE_API_KEY as string;
           res.status(200).json({apiKey})
        } catch (e: any) {
            res.status(500).json({msg: e.message});
        }
    }
}

export default handler;