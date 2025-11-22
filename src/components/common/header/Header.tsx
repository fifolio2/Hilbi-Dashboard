import Breadcrumb from './Breadcrumb'
import TitleArea from './TitleArea'

export default function Header() {
  return (
    <div className="tw:w-full tw:h-[118px] tw:rounded-xl tw:p-6 tw:bg-white tw:border tw:border-gray-200 tw:space-y-2">
      <Breadcrumb />
      <TitleArea />
    </div>
  )
}
