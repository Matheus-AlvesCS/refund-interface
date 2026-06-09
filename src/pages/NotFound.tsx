import { useNavigate } from "react-router"

export function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="w-screen h-screen p-4 bg-gray-400 flex justify-center items-center">
      <div className="bg-gray-500 p-8 rounded-lg">
        <h1 className="text-gray-100 text-3xl font-semibold text-center mb-10">
          Op's, essa página não existe! 😞
        </h1>
        <a
          onClick={() => navigate(-1)}
          className="text-green-100 font-semibold hover:text-green-200 transition ease-linear cursor-pointer text-center block"
        >
          Voltar
        </a>
      </div>
    </div>
  )
}
