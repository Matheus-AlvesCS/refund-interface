import { useActionState } from "react"
import { useNavigate } from "react-router"
import * as z from "zod"
import { AxiosError } from "axios"

import { api } from "../services/api"

import { Input } from "../components/Input"
import { Button } from "../components/Button"

const signUpSchema = z
  .object({
    name: z.string().min(3, "O nome deve ter no mínimo 3 caracteres"),
    email: z.email("E-mail inválido").trim(),
    password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
    confirmPassword: z.string("Confirme sua senha"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: "As senhas não são iguais",
    path: ["confirmPassword"],
  })

export function SignUp() {
  const [state, formAction, isLoading] = useActionState(signUp, null)

  const navigate = useNavigate()

  async function signUp(_: any, formData: FormData) {
    try {
      const data = signUpSchema.parse(Object.fromEntries(formData.entries()))

      await api.post("/users", data)

      if (confirm("Conta criada com sucesso! Deseja fazer login?")) {
        navigate("/")
      }
    } catch (error) {
      console.error(error)

      if (error instanceof z.ZodError) {
        return { error: error.issues[0].message }
      } else if (error instanceof AxiosError) {
        return { error: error.response?.data.message }
      }

      return { error: "Ocorreu um erro ao criar a conta." }
    }
  }

  return (
    <form action={formAction} className="w-full flex flex-col gap-4">
      <Input required name="name" legend="Nome" placeholder="Seu nome" />

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

      <Input
        required
        name="confirmPassword"
        legend="Confirme a senha"
        type="password"
        placeholder="123456"
      />

      {state?.error && (
        <p className="text-red-600 font-semibold text-xs text-center">
          {state.error}
        </p>
      )}

      <Button type="submit" isLoading={isLoading}>
        Cadastrar
      </Button>

      <a
        href="/"
        className="text-center mt-4 text-gray-100 text-sm font-semibold hover:text-green-800 transition ease-linear"
      >
        Já tenho uma conta
      </a>
    </form>
  )
}
