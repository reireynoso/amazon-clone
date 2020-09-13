import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.NODE_ENV === "production" ? "https://us-central1-clone-7b1aa.cloudfunctions.net/api" : "http://localhost:5001/clone-7b1aa/us-central1/api" // The API (cloud function) URL
    // baseURL: "https://us-central1-clone-7b1aa.cloudfunctions.net/api"
})

export default instance