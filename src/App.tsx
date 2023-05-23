import { useState } from 'react'
import './App.css'
import { useGetPokemonByIdQuery } from './services/pokemonApi'

export default function App() {
  const [id, setId] = useState(1)
  const { data: pokemon, error, isFetching } = useGetPokemonByIdQuery(id)

  if (error || !pokemon) return <p>Failed to load Pokemon!</p>

  if (isFetching) return <p>Loading...</p>

  return (
    <>
      <h1>
        {pokemon.id} - {pokemon.name}
      </h1>

      <img src={pokemon.imgUrl} alt={pokemon.name} />

      <button onClick={() => setId(id > 1 ? id - 1 : id)} disabled={id <= 1}>
        Previous
      </button>
      <button onClick={() => setId(id + 1)}>Next</button>
    </>
  )
}
