export function SideNavTitle({ title, subTitle }) {
  return (
    <h1 className="relative mt-6 border-b-[1px] border-b-gray-800 pb-4 font-alt text-xl font-semibold tracking-wide text-zinc-100">
      <span className="text-designColor">{title}</span>
      {subTitle}
      <span className="absolute -left-3 top-0 z-10 inline-block h-8 w-8 rounded-full bg-gradient-to-t from-designColor to-gray-600 opacity-10"></span>
    </h1>
  )
}
