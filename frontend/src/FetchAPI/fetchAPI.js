import axios from "axios";
import { useEffect, useState } from "react";



const fetchAPI = async (url) => {
    try {
        const res = await axios.get(`https://docker-ci-cd-production.up.railway.app/${url}`);
        return res.data
    } catch (error) {
        console.log("Error", error)
        return []
    }
}

export default fetchAPI