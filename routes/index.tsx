import CityForm from "../islands/CityForm/index.tsx";
import Result from "../islands/Result/index.tsx";
import Pokemon from '../islands/contexts/Pokemon/index.tsx'

export default function Home() {
  return (
    <div className="bg-slate-400 h-full px-6 pt-10">
      <Pokemon />
      <h1>Pokemon Weather Test</h1>

      <div>
        <CityForm />

        <div className="mt-2">
          <Result />
        </div>
      </div>
    </div>
  );
}
