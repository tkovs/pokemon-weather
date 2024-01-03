import { Response } from "./weather.ts";

type PokemonResponse = {
  pokemon: {
    pokemon: {
      name: string;
      url: string;
    };
  }[];
};

const getPokemonType = (temp: number, weather: Response["weather"]) => {
  console.log({ temp, weather });
  if (weather.some(({ main }) => main === "Rain")) return "electrical";

  if (temp < 5) return "ice";
  if (temp >= 5 && temp < 10) return "water";
  if (temp >= 12 && temp < 15) return "grass";
  if (temp >= 15 && temp < 21) return "ground";
  if (temp >= 23 && temp < 27) return "bug";
  if (temp >= 27 && temp <= 33) return "rock";
  if (temp > 33) return "fire";

  return "normal";
};

export const getPokemonData = async (
  temp: number,
  weather: Response["weather"],
): Promise<PokemonResponse> => {
  const type = getPokemonType(temp, weather);

  const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
  const data = response.json();

  return data;
};
