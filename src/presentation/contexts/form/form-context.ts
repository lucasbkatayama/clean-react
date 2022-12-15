import { createContext } from 'react'

export type ContextType = {
  isLoading: boolean
  errorMessage: string
}

export default createContext<ContextType | null>(null)
