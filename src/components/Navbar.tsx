export function Navbar() {
  return (
    <div className=" flex h-96 w-16 flex-col gap-4">
      <div className="group flex h-20 w-full cursor-pointer items-center justify-center rounded-3xl bg-bodyColor">
        {/* NAVBAR */}
        <div className="flex flex-col gap-1.5 overflow-hidden">
          <span className="inline-block h-[2px] w-8 -translate-x-2 bg-textColor transition-transform duration-300 group-hover:translate-x-0 group-hover:bg-designColor"></span>
          <span className="inline-block h-[2px] w-8 bg-textColor transition-transform duration-300 group-hover:bg-designColor"></span>
          <span className="inline-block h-[2px] w-8 -translate-x-3.5 bg-textColor transition-transform duration-300 group-hover:translate-x-0 group-hover:bg-designColor"></span>
        </div>
      </div>
      <div className="mt-2 h-80 w-full rounded-3xl bg-bodyColor py-6"></div>
      {/* FIM - NAVBAR */}
    </div>
  )
}
