import { Outlet } from "react-router"

import { Header } from "../components/Header"

export function AppLayout() {
  return (
    <div className="w-screen h-screen p-4 bg-gray-400 flex flex-col items-center md:p-8">
      <Header />

      <main className="bg-gray-500 rounded-2xl p-5 w-full max-w-lg md:p-10">
        <Outlet />
      </main>
    </div>
  )
}
