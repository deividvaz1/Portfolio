export function ResumeTitle({ title, icons }) {
  return (
    <h1 className="flex items-center gap-2 border-b-[1px] border-gray-800 py-3 text-lg font-medium uppercase text-gray-300">
      <span className="text-2xl text-designColor">{icons}</span>
      {title}
    </h1>
  )
}
