import { city } from '../contexts/Pokemon/state.ts'

const CityForm = () => {
  const handleOnSubmit = (e: any) => {
    e.preventDefault()

    const input = e.target.elements.cityInput.value
    city.value = input
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <label htmlFor="cityInput">City:</label>
      <input type="text" id="cityInput" />
      <button type="submit">Submit</button>
    </form>
  )
}

export default CityForm