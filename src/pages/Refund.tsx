import { Input } from "../components/Input"

export function Refund() {
  return (
    <form className="w-full flex flex-col gap-6">
      <header>
        <h1 className="text-gray-100 font-bold text-xl">
          Solicitação de reembolso
        </h1>
        <p className="text-gray-200 text-sm mt-2 mb-4">
          Dados da despesa para solicitar reembolso.{" "}
        </p>
      </header>

      <Input required legend="Nome da solicitação" />
    </form>
  )
}
