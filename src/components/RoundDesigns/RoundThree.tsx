export function RoundThree() {
  return (
    <div className="absolute left-72 top-72 h-96 w-96 rounded-full">
      <div className="relative h-full w-full animate-reverse-spin">
        <div className="absolute top-0 h-32 w-32 rounded-full bg-gray-400 blur-xl"></div>
        <div className="absolute -bottom-10 left-16 top-0 h-24 w-24 rounded-full bg-slate-500 blur-xl"></div>
        <div className="absolute -right-10 top-32 h-28 w-28 rounded-full bg-blue-600 blur-xl"></div>
      </div>
    </div>
  )
}
