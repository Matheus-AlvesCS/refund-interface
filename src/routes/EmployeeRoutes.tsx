import { Routes, Route } from "react-router"

import { Refund } from "../pages/Refund"
import { Confirm } from "../pages/Confirm"
import { AppLayout } from "../layouts/AppLayout"

export function EmployeeRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Refund />} />
        <Route path="/confirm" element={<Confirm />} />
      </Route>
    </Routes>
  )
}
