import { useMemo } from "preact/hooks";
import { city, pokemon, raining, temp } from '../contexts/Pokemon/state.ts'

const Result = () => {
  const hydrated = useMemo(() => (pokemon.value.name?.length ?? 0) > 0, [pokemon.value])

  const pokemonName = useMemo(() => {
    if (!hydrated) return '...'
    return pokemon.value.name
  }, [pokemon.value])

  const cityName = useMemo(() => {
    if (!hydrated) return '...'
    return city.value
  }, [pokemon.value, city.value])

  const rainingStatus = useMemo(() => {
    if (!hydrated) return '...'
    return raining.value ? 'Yes! It is raining!' : 'No... it is not raining'
  }, [pokemon.value, raining.value])

  const currentTemperature = useMemo(() => {
    if (!hydrated) return '...'
    return temp.value
  }, [pokemon.value, temp.value])

  return (
    <div className="bg-white flex flex-col sm:flex-row justify-between gap-4 p-4 rounded-md mx-4 my-auto sm:mx-auto max-w-[500px] flex-auto">
      <div className="flex flex-col gap-1">
        <p><span className="font-bold">Sorted Pokemon</span>: {pokemonName}</p>
        <p><span className="font-bold">City</span>: {cityName}</p>
        <p><span className="font-bold">Raining</span>: {rainingStatus}</p>
        <p><span className="font-bold">Temperature</span>: {currentTemperature}</p>
      </div>

      <div>
        {hydrated ? <img className="h-full mx-auto sm:mx-none" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.value.code}.png`} alt="Pokemon image" /> : null}
        {/* {hydrated ? <img className="h-full max-h-[110px]" src={`https://www.smogon.com/dex/media/sprites/xy/${pokemonName}.gif`} alt="Pokemon image" /> : null} */}
      </div>
    </div>
  )
}

export default Result