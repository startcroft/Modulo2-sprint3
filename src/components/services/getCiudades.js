import axios from "axios";

const API_FAKE = "https://backend-project-aerolinea-production.up.railway.app/";
const endpointCiudades = "ciudades";

export const getCiudades = async() => {
    try {
        const { data } = await axios.get(`${API_FAKE}${endpointCiudades}`);
        // console.log(data);
        return data;
    } catch (error) {
        // console.log(error);
        return [];
    }
}