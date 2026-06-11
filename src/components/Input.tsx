type Props = React.ComponentProps<"input"> & {
  legend?: string
}

export function Input({ legend, type = "text", className, ...rest }: Props) {
  return (
    <div
      className={`flex flex-1 flex-col max-h-17.5 text-gray-200 focus-within:text-green-100 focus-within:[&_legend]:font-bold ${className ?? ""}`}
    >
      {legend && (
        <legend className="text-xxs text-inherit uppercase mb-2">
          {legend}
        </legend>
      )}

      <input
        type={type}
        {...rest}
        className="bg-transparent px-4 h-12 border-2 border-transparent rounded-lg outline-1 outline-gray-300  text-gray-100 text-sm focus:outline-2 focus:outline-green-100 caret-green-100 placeholder-gray-300"
      />
    </div>
  )
}
