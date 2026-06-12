import { useState } from "react"

import { Input } from "../components/Input"
import { Button } from "../components/Button"

import searchSvg from "../assets/search.svg"

export function Dashboard() {
  const [search, setSearch] = useState("")

  function fetchUsers(e: React.SubmitEvent) {
    e.preventDefault()

    console.log(search)
  }

  return (
    <div>
      <h1 className="text-gray-100 text-xl font-bold">Solicitações</h1>

      <form
        onSubmit={fetchUsers}
        className="flex items-center justify-between gap-3 mt-6 pb-6 border-b border-b-gray-400"
      >
        <Input
          placeholder="Pesquisar pelo nome"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button type="submit" variant="search">
          <img src={searchSvg} alt="serach-icon" />
        </Button>
      </form>
    </div>
  )
}
