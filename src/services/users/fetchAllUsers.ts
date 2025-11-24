export async function fetchAllUsers(searchValue?: string, statusValue?: string) {
  try {
    const params = new URLSearchParams({
      page: "1",
      pageSize: "10",
    });

    if (searchValue) params.append("email", searchValue);
    if (statusValue) params.append("status", statusValue);

    const res = await fetch(`http://localhost:50000/users?${params.toString()}`);

    if (!res.ok) {
      throw new Error("Failed to fetch all users");
    }

    const data = await res.json();
    return data || null;
  } catch (error) {
    console.error("Error in fetchAllUsers:", error);
    return null;
  }
}
