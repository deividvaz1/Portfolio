export function RoundTwo() {
  return (
    <div className="absolute bottom-0 right-32 h-[500px] w-[500px] rounded-full">
      <div className="relative h-full w-full animate-spin-slow">
        <div className="absolute top-0 h-52 w-52 rounded-full bg-designColor blur-2xl"></div>
        <div className="absolute -bottom-10 left-16 h-24 w-24 rounded-full bg-green-600 blur-xl"></div>
        <div className="absolute -right-10 top-32 h-28 w-28 rounded-full bg-designColor blur-2xl"></div>
      </div>
    </div>
  )
}
