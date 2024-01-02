import { useEffect } from "preact/hooks";

import { city, pokemon, temp, raining } from "./state.ts";
import { getWeatherData } from "../../../services/weather.ts";
import { getPokemonData } from "../../../services/pokemon.ts";

const PokemonProvider = () => {
  useEffect(() => {
    const hydrate = async () => {
      try {
        console.log('set isloading to true')
        pokemon.value = ''

        const weatherData = await getWeatherData(city.value)

        raining.value = weatherData.weather.some(({ main }) => main === "Rain")
        temp.value = weatherData.main.temp

        const pokemonData = await getPokemonData(weatherData.main.temp, weatherData.weather)
        pokemon.value = pokemonData.pokemon[Math.floor(Math.random() * pokemonData.pokemon.length)].pokemon.name
      } catch (e) {
        console.error(e)
      } finally {
        console.log('set isloading to false')
      }
    }

    if (city.value) {
      hydrate()
    }
  }, [city.value])

  return null
}

export default PokemonProvider