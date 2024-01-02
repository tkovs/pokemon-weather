import CityForm from "../islands/CityForm/index.tsx";
import Result from "./(_components)/Result/index.tsx";

export default function Home() {
  return (
    <div className="bg-slate-400 h-full px-6 pt-10">
      <h1>Pokemon Weather Test</h1>

      <div>
        <CityForm />

        <div className="mt-2">
          <Result city="Arapiraca" pokemon="Bulbasaur" raining temp={23.3} />
        </div>
      </div>
    </div>
  );
}
