export function ServicesCard({
  icons,
  title,
  subTitle,
}: {
  icons: any
  title: string
  subTitle: any
}) {
  return (
    <div className="borderRight borderBottom flex flex-col items-center gap-2 px-6 py-8">
      <span className="mb-2 text-4xl text-designColor">{icons}</span>
      <h2 className="font-alt text-lg font-semibold">{title}</h2>
      <p className="px-6 text-center text-base font-normal text-zinc-400">
        {subTitle}
      </p>
    </div>
  )
}
