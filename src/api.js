import axios from "axios";

const baseUrl = process.env.REACT_APP_BASEURL
const apiKey = process.env.REACT_APP_APIKEY

export const getListMovie= async() => {
    const movie = await axios.get(`${baseUrl}/movie/popular?page=1&api_key=${apiKey}`)
    return movie.data.results
}

export const searchMovie = async(value) => {
    const movie = await axios.get(`${baseUrl}/search/movie?query=${value}&page=1&api_key=${apiKey}`)
    return movie.data
}

