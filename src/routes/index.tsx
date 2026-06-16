import { BrowserRouter } from "react-router"

import { AuthRoutes } from "./AuthRoutes"
import { EmployeeRoutes } from "./EmployeeRoutes"
import { ManagerRoutes } from "./ManagerRoutes"

import { Loading } from "../components/Loading"

const session = {
  user: {
    role: "manager",
  },
}

const isLoading = false

export function Routes() {
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
