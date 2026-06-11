import { useState } from "react"

import { Input } from "../components/Input"
import { Select } from "../components/Select"

import { CATEGORIES, CATEGORIES_KEYS } from "../utils/categories"

export function Refund() {
  const [category, setCategory] = useState("")

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

      <div className="flex gap-4">
        <Select
          required
          legend="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="basis-[60%] min-w-0"
        >
          {CATEGORIES_KEYS.map((category) => (
            <option value={category} key={category}>
              {CATEGORIES[category].name}
            </option>
          ))}
        </Select>

        <Input required legend="Valor" className="basis-[40%] min-w-0" />
      </div>
    </form>
  )
}
