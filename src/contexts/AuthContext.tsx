import { createContext } from "react"
import { useState, useEffect } from "react"

type AuthContext = {
  session: null | UserAPIResponse
  isLoading: boolean
  save: (data: UserAPIResponse) => void
  remove: () => void
}

export const AuthContext = createContext({} as AuthContext)

const STORAGE_KEY = "@refund"

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<null | UserAPIResponse>(null)
  const [isLoading, setIsLoading] = useState(true)

  function save(data: UserAPIResponse) {
    setSession(data)

    localStorage.setItem(`${STORAGE_KEY}:token`, data.token)
    localStorage.setItem(`${STORAGE_KEY}:user`, JSON.stringify(data.user))
  }

  function remove() {
    setSession(null)

    localStorage.removeItem(`${STORAGE_KEY}:token`)
    localStorage.removeItem(`${STORAGE_KEY}:user`)

    window.location.assign("/")
  }

  function loadUser() {
    const token = localStorage.getItem(`${STORAGE_KEY}:token`)
    const user = localStorage.getItem(`${STORAGE_KEY}:user`)

    if (token && user) {
      setSession({
        token,
        user: JSON.parse(user),
      })
    }

    setIsLoading(false)
  }

  useEffect(() => {
    loadUser()
  }, [])

  return (
    <AuthContext.Provider value={{ session, save, remove, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}
