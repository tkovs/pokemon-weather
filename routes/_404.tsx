import Pokemon from '../islands/contexts/Pokemon/index.tsx'

export default function Error404() {
  return (
    <div className="flex flex-col h-full bg-[#2e6fb6] backdrop-blur-[1px]">
      <Pokemon />

      <div className="bg-[#ffcb03] p-4 flex flex-col sm:flex-row items-center gap-4">
        <img src="/logo.png" width="150" />
      </div>

      <div className="flex grow">
        <div className="bg-white sm:flex-row justify-between gap-4 p-4 rounded-md mx-4 my-auto sm:mx-auto max-w-[500px] flex-auto">
          Page not found. <a className="font-bold" href="/">Click here</a> to go to the homepage.
        </div>
      </div>
    </div>
  );
}
