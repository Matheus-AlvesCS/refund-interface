import logoSvg from "../assets/logo.svg"
import logoutSvg from "../assets/logout.svg"

export function Header() {
  return (
    <header className="flex justify-between items-center max-w-7xl w-full mb-8">
      <img src={logoSvg} alt="logo-icon" />

      <div className="flex gap-3 items-center">
        <span className="font-semibold text-sm text-gray-200">
          Olá, Matheus
        </span>

        <img
          src={logoutSvg}
          alt="logout-icon"
          className="cursor-pointer hover:opacity-75 transition ease-linear"
        />
      </div>
    </header>
  )
}
