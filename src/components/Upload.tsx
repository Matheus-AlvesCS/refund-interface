import uploadSvg from "../assets/upload.svg"

type Props = React.ComponentProps<"input"> & {
  filename?: string | null
}

export function Upload({ filename = null, ...rest }: Props) {
  return (
    <div className="flex flex-1 flex-col max-h-17.5">
      <legend className="text-xxs text-gray-200 uppercase mb-2">
        Comprovante
      </legend>

      <div className="bg-transparent w-full h-12 pl-4 border border-gray-300 rounded-lg flex items-center outline-none">
        <input type="file" id="upload" {...rest} className="hidden" />

        <span className="text-gray-200 text-sm flex-1">
          {filename ?? "Selecione o arquivo"}
        </span>

        <label
          htmlFor="upload"
          className="h-12 w-12 bg-green-100 flex items-center justify-center rounded-lg cursor-pointer hover:bg-green-200 transition ease-linear"
        >
          <img src={uploadSvg} alt="upload-icon" className="h-6 w-6" />
        </label>
      </div>
    </div>
  )
}
