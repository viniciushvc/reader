import { useState, useEffect } from 'react'

export default function useTheme(defaultTheme = { mode: 'light' }) {
  function getInitialTheme() {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme ? JSON.parse(savedTheme) : defaultTheme
  }

  const [theme, _setTheme] = useState(getInitialTheme)

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme])

  return {
    ...theme,
    setTheme: ({ setTheme, ...theme }) => _setTheme(theme),
  }
}
