import axios from 'axios'

const POKEMON_BASE_URL = 'https://pokeapi.co/api/v2/' // Example base URL for PokeAPI

const api = axios.create({
  baseURL: POKEMON_BASE_URL,
  timeout: 10000,
})

export default api
