import { AuthContext } from "../contexts/AuthContext"
import { use } from "react"

export function useAuth() {
  const context = use(AuthContext)

  return context
}
