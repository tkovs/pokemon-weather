import { city, loading } from '../contexts/Pokemon/state.ts'

const CityForm = () => {
  const handleOnSubmit = (e: any) => {
    e.preventDefault()

    const input = e.target.elements.cityInput.value
    city.value = input
  }

  return (
    <form onSubmit={handleOnSubmit} className="bg-white rounded-3xl h-10 w-full flex items-center overflow-hidden border-solid border-[#2e6fb6] border-2">
      <input type="text" id="cityInput" className="mx-4 bg-transparent h-full w-full focus:outline-none" placeholder="Type your city name" />

      <button disabled={loading.value} type="submit" className="text-white bg-[#2e6fb6] hover:bg-[#1c5798] h-full px-4 font-bold text-lg w-[240px]">{loading.value ? 'Searching' : 'Search'}</button>
    </form>
  )
}

export default CityForm