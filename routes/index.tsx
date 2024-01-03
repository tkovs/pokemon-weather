import CityForm from "../islands/CityForm/index.tsx";
import Result from "../islands/Result/index.tsx";
import Pokemon from '../islands/contexts/Pokemon/index.tsx'

export default function Home() {
  return (
    <div className="h-full bg-[#00000066] backdrop-blur-[1px]">
      <Pokemon />

      <div className="bg-[#ffcb03] p-4 flex flex-col sm:flex-row items-center gap-4">
        <img src="/logo.png" width="150" />

        <CityForm />
      </div>

      {/* <div className="flex items-center justify-center border-white border-solid border-2">
        <div className="flex flex-col">

          <div>
            <CityForm />

            <div className="mt-2">
              <Result />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
