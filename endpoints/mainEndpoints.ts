import axios from 'axios';
import { API_BASE_URL } from "../config/config.js";

/*
Function to get endpoints
Parameters:
- resource: The optional resource (e.g., 'people', 'planets', 'films', 'species', 'vehicles', 'starships')
- id: The optional id of the resource (e.g., 2 for 'people/2/')
*/
export async function getEndpoints(resource?: string, id?: number) {
    let url = resource ? `${API_BASE_URL}${resource}` : API_BASE_URL;
    if (id !== undefined && id !== null) {
        url += `/${id}/`;
    }
    return axios.get(url);
}