import { Outlet } from "react-router"

import logoSvg from "../assets/logo.svg"

export function AuthLayout() {
  return (
    <div className="w-screen h-screen p-4 bg-gray-400 flex justify-center items-center">
      <main className="bg-gray-500 rounded-2xl p-8 flex flex-col items-center w-full max-w-115.5">
        <img src={logoSvg} alt="logo-icon" className="mb-8" />
        <Outlet />
      </main>
    </div>
  )
}
