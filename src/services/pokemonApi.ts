import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Pokemon } from './Pokemon'
import { PokemonResponse } from './PokemonResponse'

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/'}),
  endpoints: (builder) => ({
    getPokemonById: builder.query<Pokemon, number>({
      query: (id) => `pokemon/${id}`,
      transformResponse: (response: PokemonResponse) => ({
        id: response.id,
        name: response.name,
        imgUrl: response.sprites.front_default
      })
    })
  })
})

export const { useGetPokemonByIdQuery } = pokemonApi