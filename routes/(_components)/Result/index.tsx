import * as T from './types.ts'

const Result = ({ city, pokemon, raining, temp }: T.ResultProps) => {
  return (
    <div className="bg-slate-200 border-2 flex flex-col gap-1 p-4 rounded">
      <p>{city}</p>
      <p>{pokemon}</p>
      <p>{raining}</p>
      <p>{temp}</p>
    </div>
  )
}

export default Result