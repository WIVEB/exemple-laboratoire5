import axios from 'axios'

axios.defaults.baseURL = 'https://pokeapi.co/api/v2/pokemon/';

export default {
     getPokemons(){
        return axios.get().then((response) => {
            /* eslint-disable no-alert, no-console */
            console.log('axios log: ', response.data.results)
            return response.data.results
        })
    },

    getPokemonImageByUrl(url){
        return axios.get(url).then((response) => {
            return response.data.sprites.front_default
        })
    }
}