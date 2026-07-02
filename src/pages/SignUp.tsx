import { useState } from "react"
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
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  async function onSubmit(e: React.SubmitEvent) {
    e.preventDefault()

    try {
      setIsLoading(true)

      const data = signUpSchema.parse({
        name,
        email,
        password,
        confirmPassword,
      })

      await api.post("/users", data)

      if (confirm("Conta criada com sucesso! Deseja fazer login?")) {
        navigate("/")
      }
    } catch (error) {
      console.log(error)

      if (error instanceof z.ZodError) {
        return alert(error.issues[0].message)
      } else if (error instanceof AxiosError) {
        return alert(error.response?.data.message)
      }

      return alert("Erro ao criar conta, tente novamente mais tarde")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
      <Input
        required
        legend="Nome"
        placeholder="Seu nome"
        onChange={(e) => setName(e.target.value)}
      />

      <Input
        required
        legend="E-mail"
        type="email"
        placeholder="seu@email.com"
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        required
        legend="Senha"
        type="password"
        placeholder="123456"
        onChange={(e) => setPassword(e.target.value)}
      />

      <Input
        required
        legend="Confirme a senha"
        type="password"
        placeholder="123456"
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <Button type="submit" isLoading={isLoading}>
        Entrar
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
