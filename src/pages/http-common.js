import axios from "axios";
import React from 'react'

export default axios.create({
    baseURL: 'https://radiant-tor-09458.herokuapp.com/api/',
    headers: {
        'Content-type': 'application/json'
    }
})
