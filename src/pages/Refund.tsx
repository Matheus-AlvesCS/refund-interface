import { useState } from "react"
import { useNavigate, useParams } from "react-router"
import { AxiosError } from "axios"
import * as z from "zod"

import { api } from "../services/api"

import { Input } from "../components/Input"
import { Select } from "../components/Select"
import { Upload } from "../components/Upload"

import { CATEGORIES, CATEGORIES_KEYS } from "../utils/categories"
import { Button } from "../components/Button"

import fileSvg from "../assets/file.svg"

const refundSchema = z.object({
  name: z
    .string()
    .trim()
    .min(5, "O nome da solicitação deve ter no mínimo 5 caracteres"),
  category: z.enum(CATEGORIES_KEYS, "Categoria inválida"),
  amount: z.coerce.number().positive("O valor deve ser um número positivo"),
})

export function Refund() {
  const [name, setName] = useState("")
  const [category, setCategory] = useState("")
  const [amount, setAmount] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [file, setFile] = useState<File | null>(null)

  const navigate = useNavigate()
  const params = useParams<{ id: string }>()

  async function onSubmit(e: React.SubmitEvent) {
    try {
      e.preventDefault()

      setIsLoading(true)
      setError(null)

      if (params.id) {
        return navigate(-1)
      }

      if (!file) {
        return setError(
          "É obrigatório enviar um comprovante para solicitar o reembolso",
        )
      }

      const fileUploadForm = new FormData()
      fileUploadForm.append("file", file)

      const response = await api.post("/uploads", fileUploadForm)

      const data = refundSchema.parse({
        name,
        category,
        amount: amount.replace(",", "."),
      })

      await api.post("/refunds", {
        ...data,
        filename: response.data.filename,
      })

      navigate("/confirm", { state: { fromSubmit: true } })
    } catch (error) {
      console.log(error)

      if (error instanceof z.ZodError) {
        return setError(error.issues[0].message)
      } else if (error instanceof AxiosError) {
        return setError(error.response?.data.message)
      }

      return setError("Ocorreu um erro ao enviar a solicitação")
    } finally {
      setIsLoading(false)
    }
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
          filename={file && file.name}
          onChange={(e) => e.target.files && setFile(e.target.files[0])}
        />
      )}

      {error && (
        <p className="text-red-600 font-semibold text-xs text-center">
          {error}
        </p>
      )}

      <Button isLoading={isLoading} type="submit">
        {params.id ? "Voltar" : "Enviar"}
      </Button>
    </form>
  )
}
