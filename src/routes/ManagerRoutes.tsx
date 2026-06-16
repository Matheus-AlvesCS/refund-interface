import { Routes, Route } from "react-router"

import { Dashboard } from "../pages/Dashboard"
import { Refund } from "../pages/Refund"
import { AppLayout } from "../layouts/AppLayout"

export function ManagerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/refund/:id" element={<Refund />} />
      </Route>
    </Routes>
  )
}
