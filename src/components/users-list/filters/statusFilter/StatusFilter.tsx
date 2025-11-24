import { useStatusFilter } from "@/stores"
import { Button } from "antd"

export default function StatusFilter() {

  const {statusValue, setStatusValue} = useStatusFilter();

  const statuses = [
    { value: "all", label: "All Users" },
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
    { value: "pending", label: "Pending" },
  ]

  return (
    <div className="tw:flex tw:flex-wrap tw:gap-2">
      {statuses.map((status) => (
        <Button
          key={status.value}
          onClick={() => setStatusValue(status.value)}
          color="default" variant={statusValue === status.value ? "solid" : "outlined"}
          className="tw:!rounded-full"
        >
          {status.label}
        </Button>
      ))}
    </div>
  )
}