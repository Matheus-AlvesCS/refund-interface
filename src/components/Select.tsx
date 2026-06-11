type Props = React.ComponentProps<"select"> & {
  legend?: string
}

export function Select({
  legend,
  children,
  className,
  value = "",
  ...rest
}: Props) {
  return (
    <div
      className={`flex flex-1 flex-col max-h-17.5 text-gray-200 focus-within:text-green-100 focus-within:[&_legend]:font-bold ${className ?? ""}`}
    >
      {legend && (
        <legend className="text-xxs text-inherit uppercase mb-2">
          {legend}
        </legend>
      )}

      <select
        {...rest}
        className="bg-transparent px-4 h-12 border-2 border-transparent rounded-lg outline-1 outline-gray-300  text-gray-100 text-sm focus:outline-2 focus:outline-green-100 caret-green-100 placeholder-gray-300"
        value={value}
      >
        <option value="" disabled hidden>
          Selecione
        </option>
        {children}
      </select>
    </div>
  )
}
