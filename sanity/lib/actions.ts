import { groq } from "next-sanity";
import { readClient } from "./client";

interface GetResourcesParams {
    query: string
    category: string
    page: string
}

export const getResource = async (params : GetResourcesParams) => {
    const {query , category , page} = params

    try {
        const resources = await readClient.fetch(
            groq``
        )
        
    } catch (error) {
        
    }


}