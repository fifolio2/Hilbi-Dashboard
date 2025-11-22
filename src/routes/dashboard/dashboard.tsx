import { createFileRoute } from '@tanstack/react-router'
import { Header } from '@/components/common'
import { DashboardContent } from '@/components'

const Dashboard: React.FunctionComponent = () => {
  return (
    <div className="tw:p-8 tw:space-y-4">
      <Header />
      <DashboardContent />
    </div>
  )
}

export const Route = createFileRoute('/')({
  component: Dashboard,
})
