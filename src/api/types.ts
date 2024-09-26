/**
 * This file contains the type definitions for the pokeapi.
 * See https://pokeapi.co/ for more details
 */

// Detail of a pokemon, returned from pokeapi GET /pokemon/{id} endpoint
export type Pokemon = {
  abilities: Ability[]
  base_experience: number
  forms: Form[]
  game_indices: GameIndice[]
  height: number
  held_items: HeldItem[]
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: Move[]
  name: string
  order: number
  species: Specie[]
  sprites: Sprite
  stats: Stat[]
  types: Type[]
  weight: number
}

export type PokemonDetails = Pick<Pokemon, 'name' | 'height' | 'weight'> & Pick<Sprite, 'front_default'>

// List of pokemon name and url, returned from pokeapi GET /pokemon endpoint
export type PokemonListResponse = ListResponse<PokemonListResult>

type ListResponse<TResult> = {
  count: number
  next: string | null
  previous: string | null
  results: TResult[]
}

export type PokemonListResult = {
  name: string
  url: string
}

type Ability = {
  ability: {
    name: string
    url: string
  }
  is_hidden: boolean
  slot: number
}

type Form = {
  name: string
  url: string
}

type GameIndice = {
  game_index: number
  version: {
    name: string
    url: string
  }
}

type HeldItem = {
  item: {
    name: string
    url: string
  }
  version_details: VersionDetail[]
}

type VersionDetail = {
  rarity: number
  version: {
    name: string
    url: string
  }
}

type VersionGroupDetail = {
  level_learned_at: number
  move_learn_method: {
    name: string
    url: string
  }
  version_group: {
    name: string
    url: string
  }
}

type Move = {
  move: {
    name: string
    url: string
  }
  version_group_details: VersionGroupDetail[]
}

type Specie = {
  name: string
  url: string
}

type Other = {
  dream_world: {
    front_default: string | null
    front_female: string | null
  }
  'official-artwork': {
    front_default: string
  }
}

type PokemonSpriteGenerationI = {
  back_default: string
  back_gray: string
  front_default: string
  front_gray: string
}

type PokemonSpriteGenerationIIToIII = {
  back_default: string
  back_shiny: string
  front_default: string
  front_shiny: string
}

type PokemonSpriteGenerationIV = {
  back_default: string
  back_female: string | null
  back_shiny: string
  back_shiny_female: string | null
  front_default: string
  front_female: string | null
  front_shiny: string
  front_shiny_female: string | null
}

type PokemonSpriteGenerationV = {
  animated: PokemonSpriteGenerationIV
  back_default: string
  back_female: string | null
  back_shiny: string
  back_shiny_female: string | null
  front_default: string
  front_female: string | null
  front_shiny: string
  front_shiny_female: string | null
}

type PokemonSpriteGenerationVIAndVIII = {
  front_default: string
  front_female: string | null
  front_shiny: string
  front_shiny_female: string | null
}

type Icons = {
  front_default: string | null
  front_female: string | null
}

type Versions = {
  'generation-i': {
    'red-blue': PokemonSpriteGenerationI
    yellow: PokemonSpriteGenerationI
  }
  'generation-ii': {
    crystal: PokemonSpriteGenerationIIToIII
    gold: PokemonSpriteGenerationIIToIII
    silver: PokemonSpriteGenerationIIToIII
  }
  'generation-iii': {
    emerald: PokemonSpriteGenerationIIToIII
    'firered-leafgreen': PokemonSpriteGenerationIIToIII
    'ruby-sapphire': PokemonSpriteGenerationIIToIII
  }
  'generation-iv': {
    'diamond-pearl': PokemonSpriteGenerationIV
    'heartgold-soulsilver': PokemonSpriteGenerationIV
    platinum: PokemonSpriteGenerationIV
  }
  'generation-v': {
    'black-white': PokemonSpriteGenerationV
  }
  'generation-vi': {
    'omegaruby-alphasapphire': PokemonSpriteGenerationVIAndVIII
    'x-y': PokemonSpriteGenerationVIAndVIII
  }
  'generation-vii': {
    icons: Icons
    'ultra-sun-ultra-moon': PokemonSpriteGenerationVIAndVIII
  }
  'generation-viii': {
    icons: Icons
  }
}

export type Sprite = {
  back_default: string | null
  back_female: string | null
  back_shiny: string | null
  back_shiny_female: string | null
  front_default: string | null
  front_female: string | null
  front_shiny: string | null
  front_shiny_female: string | null
  other: Other[]
  versions: Versions
}

type Stat = {
  base_stat: number
  effort: number
  stat: {
    name: string
    url: string
  }
}

type Type = {
  slot: number
  type: {
    name: string
    url: string
  }
}
