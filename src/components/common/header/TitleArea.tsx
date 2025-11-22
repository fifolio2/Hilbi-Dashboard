import { useRouterState } from '@tanstack/react-router'

export default function TitleArea() {
  const { location } = useRouterState()
  const path = location.pathname
  const isInHome: string | boolean =
    path === '/' ? 'Welcome to UserManager' : false
  const isInUsersList: string | boolean =
    path === '/users/list' ? 'Users List' : false
  return (
    <h2 className="tw:text-[30px] tw:text-black tw:font-semibold">
      {isInHome && isInHome}
      {isInUsersList && isInUsersList}
    </h2>
  )
}
