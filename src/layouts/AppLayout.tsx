import { Outlet } from "react-router"

import { Header } from "../components/Header"

export function AppLayout() {
  return (
    <div className="w-screen h-screen p-4 bg-gray-400 flex flex-col items-center md:p-8">
      <Header />

      <main className="p-3 w-full md:w-auto">
        <Outlet />
      </main>
    </div>
  )
}
