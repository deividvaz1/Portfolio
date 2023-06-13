export function Title({ title, subTitle }: { title: string; subTitle: any }) {
  return (
    <h1 className="borderBottom group relative z-10 px-6 py-3 font-alt text-xl font-bold capitalize text-textColor">
      <span className="text-designColor">{title}</span> {subTitle}{' '}
      <span className="absolute left-2 top-3 -z-10 inline-block h-8 w-8 translate-x-0 rounded-full bg-gradient-to-t from-designColor to-gray-600 opacity-10 transition-transform duration-500 group-hover:translate-x-24"></span>
    </h1>
  )
}
