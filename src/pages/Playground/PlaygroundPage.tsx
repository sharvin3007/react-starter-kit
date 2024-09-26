// import { useEffect, useState } from 'react'

// import { fetchPokemonDetails, fetchPokemons } from '../../api/methods'
// import { Pokemon, PokemonDetails, PokemonListResult } from '../../api/types'
// import { Button } from '../../design-system/components'

import './playgroundPage.css'

export const PlaygroundPage = () => {
  // const [pokemonList, setPokemonList] = useState<PokemonListResult[] | null>(null)
  // const [selectedPokemon, setSelectedPokemon] = useState<PokemonDetails | null>(null)

  // useEffect(() => {
  //   const getPokemons = async () => {
  //     const pokemons = await fetchPokemons()
  //     if (pokemons) {
  //       setPokemonList(pokemons)
  //     }
  //   }

  //   getPokemons()
  // }, [])

  // const handlePokemonClick = async (name: string) => {
  //   const details: Pokemon | void = await fetchPokemonDetails(name)

  //   if (details) {
  //     const pokemonDetails: PokemonDetails = {
  //       front_default: details.sprites.front_default,
  //       height: details.height,
  //       name: details.name,
  //       weight: details.weight,
  //     }

  //     setSelectedPokemon(pokemonDetails)
  //   }
  // }

  return (
    <div>
      <h1>Welcome to the Playground</h1>
      {/* <ul>
        {pokemonList?.map((pokemon) => (
          <Button
            key={`pokemon-${pokemon.name}-${pokemon.url}`}
            label={pokemon.name}
            onClick={() => handlePokemonClick(pokemon.name)}
          />
        ))}
        {selectedPokemon && (
          <div style={{ marginTop: '10px' }}>
            <h2>{selectedPokemon.name}</h2>
            <img src={selectedPokemon.front_default ?? ''} alt={selectedPokemon.name} />
            <p>
              <strong>Height:</strong> {selectedPokemon.height} cm
            </p>
            <p>
              <strong>Weight:</strong> {selectedPokemon.weight} kg
            </p>
          </div>
        )}
      </ul> */}
    </div>
  )
}
