import { useRouterState } from '@tanstack/react-router'

export default function Breadcrumb() {
  const { location } = useRouterState()
  const path = location.pathname
  const isInUsersList: string | boolean =
    path === '/users/list' ? '/ Users List' : false

  return (
    <h6 className="tw:text-[14px] tw:font-normal tw:text-blue-950">
      <span className="tw:text-[#8C8C8C]">Home </span>
      <span>{isInUsersList && isInUsersList}</span>
    </h6>
  )
}
