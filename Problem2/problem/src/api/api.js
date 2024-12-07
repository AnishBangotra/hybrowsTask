import axios from "axios"

export const getUser = (number) => {
    return axios.get(`https://swapi.dev/api/people/${number}`, {
        headers: 'Accept: application/json'
    })
    .then((result) => {
        return result;
    })
    .catch((err) => console.log('Errorrrrrrrrrr', err))
} 