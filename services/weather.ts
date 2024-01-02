const API_KEY = "bd22128fc9747747638ed845acca1adb";

export type Response = {
  "coord": {
    "lon": number;
    "lat": number;
  };
  "weather": [
    {
      "id": number;
      "main": string;
      "description": string;
      "icon": string;
    },
  ];
  "base": string;
  "main": {
    "temp": number;
    "feels_like": number;
    "temp_min": number;
    "temp_max": number;
    "pressure": number;
    "humidity": number;
    "sea_level": number;
    "grnd_level": number;
  };
  "visibility": number;
  "wind": {
    "speed": number;
    "deg": number;
    "gust": number;
  };
  "clouds": {
    "all": number;
  };
  "dt": number;
  "sys": {
    "country": string;
    "sunrise": number;
    "sunset": number;
  };
  "timezone": number;
  "id": number;
  "name": string;
  "cod": number;
};

export const getWeatherData = async (city: string): Promise<Response> => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
  );
  const data = response.json();

  return data;
};
