import { useState } from "react"

import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { RefundItem, type RefundItemProps } from "../components/RefundItem"
import { Pagination } from "../components/Pagination"

import { CATEGORIES } from "../utils/categories"

import searchSvg from "../assets/search.svg"

const fake_user = {
  id: "8",
  name: "Matheus",
  category: "Alimentação",
  amount: 58.85,
  categoryImg: CATEGORIES["food"].icon,
}

export function Dashboard() {
  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(10)
  const [refunds, setRefunds] = useState<RefundItemProps[]>([fake_user])

  function fetchUsers(e: React.SubmitEvent) {
    e.preventDefault()

    console.log(search)
  }

  function handlePagination(action: "next" | "previous") {
    setPage((prevPage) => {
      if (action === "next" && prevPage < totalPages) {
        return prevPage + 1
      } else if (action === "previous" && prevPage > 1) {
        return prevPage - 1
      }

      return prevPage
    })
  }

  return (
    <div className="bg-gray-500 w-full rounded-2xl p-5 md:p-10 md:min-w-270.5">
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

      <div className="flex flex-col gap-4 my-6 max-h-85.5 overflow-y-scroll">
        {refunds.length > 0 ? (
          refunds.map((refund) => (
            <RefundItem
              key={refund.id}
              data={refund}
              href={`/refund/${refund.id}`}
            />
          ))
        ) : (
          <h2 className="text-gray-100 text-xl font-semibold text-center">
            Não há nenhuma solicitação
          </h2>
        )}
      </div>

      <Pagination
        current={page}
        total={totalPages}
        onNext={() => handlePagination("next")}
        onPrevious={() => handlePagination("previous")}
      />
    </div>
  )
}
