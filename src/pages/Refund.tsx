import { useState } from "react"
import { useNavigate, useParams } from "react-router"

import { Input } from "../components/Input"
import { Select } from "../components/Select"
import { Upload } from "../components/Upload"

import { CATEGORIES, CATEGORIES_KEYS } from "../utils/categories"
import { Button } from "../components/Button"

import fileSvg from "../assets/file.svg"

export function Refund() {
  const [name, setName] = useState("Matheus")
  const [category, setCategory] = useState("food")
  const [amount, setAmount] = useState("58.85")
  const [isLoading, setIsLoading] = useState(false)
  const [filename, setFilename] = useState<File | null>(null)

  const navigate = useNavigate()
  const params = useParams<{ id: string }>()

  function onSubmit(e: React.SubmitEvent) {
    e.preventDefault()

    if (params.id) {
      return navigate(-1)
    }

    console.log(name, category, amount, filename)
    navigate("/confirm", { state: { fromSubmit: true } })
  }

  return (
    <form
      onSubmit={onSubmit}
      className="bg-gray-500 w-full rounded-2xl flex flex-col p-5 md:p-10 gap-6 md:min-w-lg"
    >
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
        disabled={!!params.id}
        onChange={(e) => setName(e.target.value)}
      />

      <div className="flex gap-4">
        <Select
          required
          legend="Categoria"
          value={category}
          disabled={!!params.id}
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
          disabled={!!params.id}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      {params.id ? (
        <a
          href="https://youtube.com"
          target="_blank"
          className="flex justify-center items-center gap-2 my-2 text-green-100 font-semibold text-sm hover:text-green-200 transition ease-linear"
        >
          <img src={fileSvg} alt="file-icon" />
          Abrir comprovante
        </a>
      ) : (
        <Upload
          filename={filename && filename.name}
          onChange={(e) => e.target.files && setFilename(e.target.files[0])}
        />
      )}

      <Button isLoading={isLoading} type="submit">
        {params.id ? "Voltar" : "Enviar"}
      </Button>
    </form>
  )
}
