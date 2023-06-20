import Image from 'next/image'

export function ProjectCard({
  image,
  title,
  category,
}: {
  image: any
  title: any
  category: string
}) {
  return (
    <div className="flex w-full flex-col items-center justify-center border-b-[1px] border-gray-800 py-8">
      <div className="group relative mb-3 h-full w-full cursor-pointer overflow-hidden">
        <Image
          src={image}
          alt="Card Image"
          className="rounded-2xl object-cover"
          loading="lazy"
          width={500}
          height={300}
        />
        <div className="absolute left-0 top-0 h-full w-full rounded-2xl from-green-700 via-green-600 to-green-300 opacity-20 hover:bg-gradient-to-t"></div>
      </div>
      <h3 className="font-alt text-lg font-semibold text-[#ccc]">{title}</h3>
      <p className="-mt-1 font-normal text-gray-400">{category}</p>
    </div>
  )
}
