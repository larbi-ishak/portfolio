"use client"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Switch } from "@/components/ui/switch"
import { Moon, Sun } from "lucide-react"

export function ToggleTheme() {
  const [isDark, setDark] = useState(false)
  const { setTheme, theme } = useTheme()

  // TODO: fix this when the system is by default dark , the button is not checked its just the theme chaged to dark but the button is not synchronized
  // useEffect for initial theme
  useEffect(() => {
    if (theme === "dark") {
      setDark(true)
    }
  }, [theme])

  const toggleDark = (e: React.MouseEvent<HTMLButtonElement>) => {
    let darkState = e.currentTarget.getAttribute("data-state")
    darkState === "checked" ? setTheme("light") : setTheme("dark")
    setDark(!isDark)
  }

  return (
    <>
      {isDark ? <Moon /> : <Sun />}
      <Switch onClick={toggleDark} id="Dark-mode" />
    </>
  )
}
