export interface Pokemon {
  names: PokemonName[]
  sprites: [
    { front_default: string },
    { back_default: string },
    { front_shiny: string },
    { back_shiny: string }
  ]
  types: PokemonType[]
  johtodex_number: number
  is_legendary: boolean
}

export interface PokemonName {
  language: string
  name: string
}

export interface PokemonType {
  _id: number
  name: string
}
