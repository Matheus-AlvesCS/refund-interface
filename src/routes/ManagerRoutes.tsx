import { Routes, Route } from "react-router"

import { Dashboard } from "../pages/Dashboard"
import { AppLayout } from "../layouts/AppLayout"

export function ManagerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout maxWidth="dashboard" />}>
        <Route path="/" element={<Dashboard />} />
      </Route>
    </Routes>
  )
}
