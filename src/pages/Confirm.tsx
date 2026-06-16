import { Navigate, useLocation } from "react-router"

import okSvg from "../assets/ok.svg"

export function Confirm() {
  const location = useLocation()

  if (!location.state?.fromSubmit) {
    return <Navigate to="/" />
  }

  return (
    <div className="bg-gray-500 w-full rounded-2xl flex flex-col items-center p-5 md:p-10 gap-6 md:max-w-lg">
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
