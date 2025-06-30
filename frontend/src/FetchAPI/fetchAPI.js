import axios from "axios";
import { useEffect, useState } from "react";



const fetchAPI = async () => {
            try {
            const res = await axios.get('https://docker-ci-cd-production.up.railway.app/products');
            return res.data
            } catch (error) {
                console.log("Error",error)
                return []
            }
}

export default fetchAPI