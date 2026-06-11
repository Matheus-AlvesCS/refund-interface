import { Outlet } from "react-router"

import { Header } from "../components/Header"

type Display = {
  maxWidth?: "default" | "dashboard"
}

export function AppLayout({ maxWidth = "default" }: Display) {
  return (
    <div className="w-screen h-screen p-4 bg-gray-400 flex flex-col items-center md:p-8">
      <Header />

      <main
        className={`bg-gray-500 rounded-2xl p-5 w-full ${maxWidth === "dashboard" ? "max-w-270.5" : "max-w-lg"} md:p-10`}
      >
        <Outlet />
      </main>
    </div>
  )
}
