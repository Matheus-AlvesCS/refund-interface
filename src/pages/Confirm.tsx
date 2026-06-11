import { Navigate, useLocation } from "react-router"

import okSvg from "../assets/ok.svg"

export function Confirm() {
  const location = useLocation()

  if (!location.state?.fromSubmit) {
    return <Navigate to="/" />
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="text-green-100 font-bold text-2xl">
        Solicitação enviada!
      </h1>

      <img src={okSvg} alt="approved-icon" className="w-28" />

      <p className="text-gray-200 text-sm text-center">
        Agora é apenas aguardar! Sua solicitação será analisada e, em breve, o
        setor financeiro irá entrar em contato com você.
      </p>

      <a
        href="/"
        className="w-full bg-green-100 flex items-center justify-center mt-4 h-12 rounded-lg text-white font-semibold text-sm hover:bg-green-200 transition ease-linear"
      >
        Nova solicitação
      </a>
    </div>
  )
}
