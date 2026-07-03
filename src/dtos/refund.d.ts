interface RefundAPIResponse {
  id: string
  name: string
  category: CategoryAPIEnum
  amount: number
  filename: string
  user: {
    name: string
  }
}

interface RefundsPaginationAPIResponse {
  allRefunds: RefundAPIResponse[]
  pagination: {
    page: number
    perPage: number
    totalPages: number
    totalRecords: number
  }
}
