import { useState } from "react"
import { useNavigate } from "react-router"

import { Input } from "../components/Input"
import { Select } from "../components/Select"
import { Upload } from "../components/Upload"

import { CATEGORIES, CATEGORIES_KEYS } from "../utils/categories"
import { Button } from "../components/Button"

export function Refund() {
  const [name, setName] = useState("")
  const [category, setCategory] = useState("")
  const [amount, setAmount] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [filename, setFilename] = useState<File | null>(null)

  const navigate = useNavigate()

  function onSubmit(e: React.SubmitEvent) {
    e.preventDefault()

    console.log(name, category, amount, filename)
    navigate("/confirm", { state: { fromSubmit: true } })
  }

  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-6">
      <header>
        <h1 className="text-gray-100 font-bold text-xl">
          Solicitação de reembolso
        </h1>
        <p className="text-gray-200 text-sm mt-2 mb-4">
          Dados da despesa para solicitar reembolso.{" "}
        </p>
      </header>

      <Input
        required
        legend="Nome da solicitação"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

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

        <Input
          required
          legend="Valor"
          className="basis-[40%] min-w-0"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <Upload
        filename={filename && filename.name}
        onChange={(e) => e.target.files && setFilename(e.target.files[0])}
      />

      <Button isLoading={isLoading} type="submit">
        Enviar
      </Button>
    </form>
  )
}
