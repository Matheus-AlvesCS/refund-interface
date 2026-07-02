import { useActionState } from "react"
import { AxiosError } from "axios"
import * as z from "zod"

import { useAuth } from "../hooks/useAuth"
import { api } from "../services/api"

import { Input } from "../components/Input"
import { Button } from "../components/Button"

const signInSchema = z.object({
  email: z.email("E-mail inválido").trim(),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
})

export function SignIn() {
  const [state, formAction, isLoading] = useActionState(signIn, null)

  const context = useAuth()

  async function signIn(_: any, formData: FormData) {
    try {
      const data = signInSchema.parse(Object.fromEntries(formData.entries()))

      const response = await api.post("/sessions", data)

      context.save(response.data)
    } catch (error) {
      console.log(error)

      if (error instanceof z.ZodError) {
        return { error: error.issues[0].message }
      } else if (error instanceof AxiosError) {
        return { error: error.response?.data.message }
      }

      return { error: "Ocorreu um erro ao tentar fazer login" }
    }
  }

  return (
    <form action={formAction} className="w-full flex flex-col gap-4">
      <Input
        required
        name="email"
        legend="E-mail"
        type="email"
        placeholder="seu@email.com"
      />

      <Input
        required
        name="password"
        legend="Senha"
        type="password"
        placeholder="123456"
      />

      {state?.error && (
        <p className="text-red-600 font-semibold text-xs text-center">
          {state.error}
        </p>
      )}

      <Button type="submit" isLoading={isLoading}>
        Entrar
      </Button>

      <a
        href="/signup"
        className="text-center mt-4 text-gray-100 text-sm font-semibold hover:text-green-800 transition ease-linear"
      >
        Criar conta
      </a>
    </form>
  )
}
