// import { Avatar } from "antd"

import { fetchAllUsers } from "@/services/users/fetchAllUsers";
import { useFilterResults, useSearchFilter, useStatusFilter } from "@/stores";
import { Avatar, Badge, Spin } from "antd"
import { useEffect, useState } from "react";

const statusConfig = {
  active: { label: "Active", variant: "default" },
  inactive: { label: "Inactive", variant: "secondary" },
  pending: { label: "Pending", variant: "outline" },
} as const;

export default function UsersTable() {

  const [loading, setLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<any[]>([]);

  const { searchValue } = useSearchFilter();
  const { statusValue } = useStatusFilter();
  const { setTotalUsersValue, setFilteredUsers } = useFilterResults();

  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);

      const result = await fetchAllUsers(searchValue, statusValue);

      const items = result?.items || [];
      const filtered = result?.items.length || 0;
      const total = result?.pagination?.total || 0;

      setUsers(items);
      setFilteredUsers(filtered);
      setTotalUsersValue(total);

      setLoading(false);
    };

    loadUsers();
  }, [searchValue, statusValue, setTotalUsersValue, setFilteredUsers]);



  if (loading) {
    return (
      <center className="tw:mt-20">
        <Spin size="large" />
      </center>
    )
  }

  if (users.length === 0) {
    return (
      <div className="tw:flex tw:items-center tw:justify-center tw:py-12">
        <p className="tw:text-muted-foreground">No users found</p>
      </div>
    )
  }

  return (
    <div className="tw:overflow-x-auto tw:rounded-xl tw:bg-white tw:p-1 tw:border tw:border-gray-200">
      <table className="tw:w-full tw:rounded-sm">
        <thead>
          <tr className="tw:border-none tw:bg-gray-100">
            <th className="tw:px-6 tw:rounded-l-xl tw:py-4 tw:text-left tw:text-sm tw:font-semibold tw:text-foreground">Name</th>
            <th className="tw:px-6 tw:py-4 tw:text-left tw:text-sm tw:font-semibold tw:text-foreground">Email</th>
            <th className="tw:px-6 tw:py-4 tw:text-left tw:text-sm tw:font-semibold tw:text-foreground">Status</th>
            <th className="tw:px-6 tw:py-4 tw:text-left tw:text-sm tw:font-semibold tw:text-foreground">Address</th>
            <th className="tw:px-6 tw:py-4 tw:text-left tw:text-sm tw:font-semibold tw:text-foreground">Balance</th>
            <th className="tw:px-6 tw:rounded-r-xl tw:py-4 tw:text-left tw:text-sm tw:font-semibold tw:text-foreground">Created</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="tw:border-b tw:border-border hover:tw:bg-muted/30 tw:transition-colors"
            >
              {/* Name */}
              <td className="tw:px-6 tw:py-4">
                <div className="tw:flex tw:items-center tw:gap-3">
                  <Avatar className="tw:h-8 tw:w-8 tw:rounded-full tw:bg-orange-500">
                    {user.firstName[0]}{user.lastName[0]}
                  </Avatar>
                  <div className="tw:flex tw:flex-col">
                    <span className="tw:font-medium tw:text-foreground">
                      {user.firstName} {user.lastName}
                    </span>
                  </div>
                </div>
              </td>

              {/* Email */}
              <td className="tw:px-6 tw:py-4">
                <span className="tw:text-sm tw:text-muted-foreground">
                  {user.email}
                </span>
              </td>

              {/* Status */}
              <td className="tw:px-6 tw:py-4">
                <Badge>
                  {statusConfig[user.status as keyof typeof statusConfig]?.label || user.status}
                </Badge>
              </td>

              {/* Address */}
              <td className="tw:px-6 tw:py-4">
                <div className="tw:flex tw:flex-col tw:text-sm">
                  <span className="tw:text-foreground">{user.address.city}</span>
                  <span className="tw:text-xs tw:text-muted-foreground">
                    {user.address.country}
                  </span>
                </div>
              </td>

              {/* Balance */}
              <td className="tw:px-6 tw:py-4">
                <span className="tw:font-medium tw:text-foreground">
                  {user.account.balance} {user.account.currency}
                </span>
              </td>

              {/* Created */}
              <td className="tw:px-6 tw:py-4">
                <span className="tw:text-sm tw:text-muted-foreground">
                  {user.createdAt}
                </span>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  )
}
