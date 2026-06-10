import { Routes, Route } from "react-router"

import { Refund } from "../pages/Refund"
import { AppLayout } from "../layouts/AppLayout"

export function EmployeeRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Refund />} />
      </Route>
    </Routes>
  )
}
