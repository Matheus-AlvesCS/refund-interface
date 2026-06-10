import { Routes, Route } from "react-router"

import { Refund } from "../pages/Refund"

export function EmployeeRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Refund />} />
    </Routes>
  )
}
