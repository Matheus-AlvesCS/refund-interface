import { BrowserRouter } from "react-router"
import { useAuth } from "../hooks/useAuth"

import { AuthRoutes } from "./AuthRoutes"
import { EmployeeRoutes } from "./EmployeeRoutes"
import { ManagerRoutes } from "./ManagerRoutes"

import { Loading } from "../components/Loading"

const session = {
  user: {
    role: "",
  },
}

const isLoading = false

export function Routes() {
  const context = useAuth()
  console.log(context)

  if (isLoading) {
    return <Loading />
  }

  function Route() {
    switch (session.user.role) {
      case "employee":
        return <EmployeeRoutes />
      case "manager":
        return <ManagerRoutes />
      default:
        return <AuthRoutes />
    }
  }

  return (
    <BrowserRouter>
      <Route />
    </BrowserRouter>
  )
}
