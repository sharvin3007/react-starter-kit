import api from './baseApi'
import { Pokemon, PokemonListResponse, PokemonListResult } from './types'

/**
 * Fetch a list of Pokémon from the API.
 * @returns A list of Pokémon details or undefined if the request fails.
 */
export const fetchPokemons = async (): Promise<PokemonListResult[] | void> => {
  try {
    // Make a request to the API to fetch a list of Pokémon.
    // The response will contain a list of Pokémon details.
    const response = await api.get<PokemonListResponse>('pokemon?limit=20&offset=0')
    // Extract the Pokémon details from the response.
    const pokeList: PokemonListResult[] = response.data.results
    // Return the list of Pokémon details.
    return pokeList
  } catch (error) {
    // Catch any errors that might occur and log them to the console.
    console.error('Error fetching Pokémon:', error)
  }
}

/**
 * Fetch the details of a specific Pokémon from the API.
 * @param name The name of the Pokémon to fetch.
 * @returns A Pokemon object or undefined if the request fails.
 */
export const fetchPokemonDetails = async (name: string): Promise<Pokemon | void> => {
  try {
    const response = await api.get<Pokemon>(`pokemon/${name}`)
    return response.data
  } catch (error) {
    console.error('Error fetching Pokémon details:', error)
  }
}
