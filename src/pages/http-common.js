import axios from "axios";
import React from 'react'

export default axios.create({
    baseURL: 'https://premios-piagetianos-hgc8d.ondigitalocean.app/api/',
    headers: {
        'Content-type': 'application/json'
    }
})
