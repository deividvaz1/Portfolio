export function ResumeCard({ badge, title, subTitle, des }) {
  return (
    <div className="flex w-full flex-col gap-2.5 border-b-[1px] border-gray-800 py-6">
      {badge === '' ? (
        <h6 className="w-28 rounded-sm border-[1px] border-designColor py-[1px]  text-center font-alt text-sm text-designColor">
          2022-Atual
        </h6>
      ) : (
        <h6 className="w-28 rounded-sm border-[1px] border-designColor py-[1px]  text-center font-alt text-sm text-designColor">
          {badge}
        </h6>
      )}

      <h2 className="font-alt text-lg font-medium text-gray-200">{title}</h2>
      <p className="-mt-2 text-sm text-[#999]">{subTitle}</p>
      <p className="pr-10 text-base font-medium text-[#999]">{des}</p>
    </div>
  )
}
