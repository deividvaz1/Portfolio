export function RoundFour() {
  return (
    <div className="absolute left-1/3 right-32 top-0 h-[800px] w-[800px] rounded-full">
      <div className="relative h-full w-full animate-reverse-spin">
        <div className="absolute right-0 top-10 h-40 w-40 rounded-full bg-designColor blur-3xl"></div>
        <div className="absolute -bottom-10 left-16 h-52 w-52 rounded-full bg-gradient-to-t from-orange-700 to-lime-600 blur-3xl"></div>
        <div className="absolute -right-0 top-0 h-28 w-28 rounded-full bg-blue-600 blur-2xl"></div>
        <div className="absolute -right-10 top-0 h-28 w-28 rounded-full bg-blue-600 blur-2xl"></div>
      </div>
    </div>
  )
}
