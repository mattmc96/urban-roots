import { useState, useEffect, createContext } from 'react'
import authService from '../Components/Services/authService'

export const AuthContext = createContext()

export default ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    authService.isAuthenticated().then((data) => {
      setUser(data.user)
      setIsAuthenticated(data.isAuthenticated)
    })
  })
}
