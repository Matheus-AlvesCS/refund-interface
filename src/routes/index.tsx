import { BrowserRouter } from "react-router"

import { AuthRoutes } from "./AuthRoutes"
import { EmployeeRoutes } from "./EmployeeRoutes"
import { ManagerRoutes } from "./ManagerRoutes"

const session = {
  user: {
    role: "manager",
  },
}

export function Routes() {
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
