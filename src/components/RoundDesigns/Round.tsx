export function Round() {
  return (
    <div className="relative -left-10 top-0 h-96 w-96 animate-spin-slow">
      <div className="absolute top-0 h-32 w-32 rounded-full bg-designColor blur-xl"></div>
      <div className="absolute -bottom-10 left-16 h-24 w-24 rounded-full bg-green-600 blur-xl"></div>
      <div className="absolute -right-10 top-32 h-28 w-28 rounded-full bg-designColor blur-2xl"></div>
    </div>
  )
}
