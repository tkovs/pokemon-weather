import { useEffect } from "preact/hooks";

import { city, pokemon, temp, raining, loading } from "./state.ts";
import { getWeatherData } from "../../../services/weather.ts";
import { getPokemonData } from "../../../services/pokemon.ts";

const PokemonProvider = () => {
  useEffect(() => {
    const hydrate = async () => {
      try {
        loading.value = true
        pokemon.value = {}

        const weatherData = await getWeatherData(city.value)

        raining.value = weatherData.weather.some(({ main }) => main === "Rain")
        temp.value = weatherData.main.temp

        const pokemonData = await getPokemonData(weatherData.main.temp, weatherData.weather)
        const sorted = pokemonData.pokemon[Math.floor(Math.random() * pokemonData.pokemon.length)]
        pokemon.value = {
          name: sorted.pokemon.name,
          code: /pokemon\/(.*?)\//i.exec(sorted.pokemon.url)?.[1] ?? ""
        }
      } catch (e) {
        console.error(e)
      } finally {
        loading.value = false
      }
    }

    if (city.value) {
      hydrate()
    }
  }, [city.value])

  return null
}

export default PokemonProvider