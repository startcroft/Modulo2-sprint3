import axios from "axios";

const API_FAKE = "https://backend-project-aerolinea-production.up.railway.app/";


export const getCiudades = async(endpoint) => {
    try {
        const { data } = await axios.get(`${API_FAKE}${endpoint}`);
        // console.log(data);
        return data;
    } catch (error) {
        // console.log(error);
        return [];
    }
}

export const getTime = async() => {
    try {
        const { dates } = await axios.get(`${API_FAKE}/dates`);
        // console.log(data);
        return dates;
    } catch (error) {
        console.log(error);
        return [];
    }
}