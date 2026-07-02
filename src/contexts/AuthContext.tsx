import { createContext } from "react"
import { useState, useEffect } from "react"

type AuthContext = {
  session: null | UserAPIResponse
  save: (data: UserAPIResponse) => void
}

export const AuthContext = createContext({} as AuthContext)

const STORAGE_KEY = "@refund"

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<null | UserAPIResponse>(null)

  function save(data: UserAPIResponse) {
    setSession(data)

    localStorage.setItem(`${STORAGE_KEY}:token`, data.token)
    localStorage.setItem(`${STORAGE_KEY}:user`, JSON.stringify(data.user))
  }

  return (
    <AuthContext.Provider value={{ session, save }}>
      {children}
    </AuthContext.Provider>
  )
}
