import { formatCurrency } from "../utils/formatCurrency"

export type RefundItemProps = {
  id: string
  name: string
  category: string
  amount: number
  categoryImg: string
}

type Props = React.ComponentProps<"a"> & {
  data: RefundItemProps
}

export function RefundItem({ data, ...rest }: Props) {
  return (
    <a
      {...rest}
      className="w-full flex items-center cursor-pointer rounded-lg hover:bg-green-100/10 p-2 transition ease-linear"
    >
      <img
        src={data.categoryImg}
        alt="category-icon"
        className="w-8 h-8 mr-3"
      />

      <div className="flex flex-col flex-1">
        <strong className="text-gray-100 text-sm">{data.name}</strong>
        <span className="text-gray-200 text-xs">{data.category}</span>
      </div>

      <span className="text-gray-100 text-sm font-semibold">
        <small className="text-gray-200">R$ </small>
        {formatCurrency(data.amount).replace("R$", "")}
      </span>
    </a>
  )
}
