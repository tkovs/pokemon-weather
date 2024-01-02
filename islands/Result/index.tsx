import { city, pokemon, raining, temp } from '../contexts/Pokemon/state.ts'

const Result = () => {
  if (!pokemon.value) {
    return null
  }

  return (
    <div className="bg-slate-200 border-2 flex flex-col gap-1 p-4 rounded">
      <p>City: {city.value}</p>
      <p>Pokemon: {pokemon.value}</p>
      <p>Raining: {raining.value ? 'Yes' : 'No'}</p>
      <p>Temperature: {temp.value}</p>
    </div>
  )
}

export default Result