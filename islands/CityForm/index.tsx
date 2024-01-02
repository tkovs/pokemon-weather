import { useEffect, useState } from "preact/hooks";
import { Response, getWeatherData } from "../../services/weather.ts";

const CityForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState<Response | undefined>(undefined)

  const handleOnSubmit = async (e: any) => {
    e.preventDefault()
    setIsLoading(true)

    const city = e.target.elements.cityInput.value
    const response = await getWeatherData(city)

    setIsLoading(false)
    setData(response)
  }

  useEffect(() => {
    if (data) {
      console.log({ data })
    }
  }, [data])

  return (
    <form onSubmit={handleOnSubmit}>
      <label htmlFor="cityInput">City:</label>
      <input disabled={isLoading} type="text" id="cityInput" />
      <button disabled={isLoading} type="submit">{isLoading ? 'Loading...' : 'Submit'}</button>
    </form>
  )
}

export default CityForm