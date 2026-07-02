type UserAPIRole = "manager" | "employee"

interface UserAPIResponse {
  token: string
  user: {
    id: string
    name: string
    email: string
    role: UserAPIRole
  }
}
