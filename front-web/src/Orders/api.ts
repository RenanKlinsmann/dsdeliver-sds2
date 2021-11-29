import axios from "axios";
import { OrderPayload } from "./types";

const API_URL = 'https://renan-dsdeliver-sds.herokuapp.com'//process.env.REACT_APP_API_URL;
const mapboxToken = 'pk.eyJ1IjoicmVuYW5tZW5kb25jYTE5OTQiLCJhIjoiY2t3a3o3bXRsMXhjMTJ1b3ppMnVncGFobCJ9.qNMoYtP7RBxGs9M6v4R1fw'; //process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX;
export function fetchProducts (){
    return axios(`${API_URL}/products`)
}

export function fetchLocalMapBox(local: string) {
    return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`)
}

export function saveOrder(payload: OrderPayload) {
    return axios.post(`${API_URL}/orders`, payload);
}