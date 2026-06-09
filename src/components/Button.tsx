type Props = React.ComponentProps<"button"> & {
  isLoading?: boolean
}

export function Button({
  children,
  isLoading,
  type = "button",
  ...rest
}: Props) {
  return (
    <button
      type={type}
      disabled={isLoading}
      {...rest}
      className="bg-green-100 h-12 rounded-lg flex items-center justify-center text-white font-semibold text-sm cursor-pointer not-disabled:hover:bg-green-200 transition ease-linear disabled:cursor-not-allowed disabled:opacity-50"
    >
      {children}
    </button>
  )
}
