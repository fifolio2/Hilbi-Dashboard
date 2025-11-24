import { useSearchFilter } from "@/stores";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
export default function SearchFilters() {

  const { setSearchValue } = useSearchFilter();

  return (
    <div className="tw:flex">
      <SearchOutlined className="tw:!text-gray-500 tw:absolute tw:z-10 tw:mt-[9px] tw:ml-3 " />
      <Input
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search by email..."
        className="tw:!pl-9 tw:!shadow-xs"
      />
    </div>
  )
}