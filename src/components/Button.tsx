import { classMerge } from "../utils/classMerge"

type Props = React.ComponentProps<"button"> & {
  isLoading?: boolean
  variant?: "base" | "search" | "small"
}

const variants = {
  button: {
    base: "h-12",
    search: "h-12 w-12 aspect-square",
    small: "h-8 w-8 aspect-square",
  },
}

export function Button({
  children,
  isLoading,
  type = "button",
  variant = "base",
  className,
  ...rest
}: Props) {
  return (
    <button
      type={type}
      disabled={isLoading}
      {...rest}
      className={classMerge([
        "bg-green-100 rounded-lg flex items-center justify-center text-white font-semibold text-sm cursor-pointer not-disabled:hover:bg-green-200 transition ease-linear disabled:cursor-not-allowed disabled:opacity-50",
        variants.button[variant],
        className,
      ])}
    >
      {children}
    </button>
  )
}
