"use client"
import * as React from "react"
import { useTheme } from "next-themes"
import { Switch } from "@/components/ui/switch"
import { Moon, Sun} from "lucide-react"

export function ToggleTheme() {
  const [isDark, setDark] = React.useState(false)
  const { setTheme } = useTheme()
  const toggleDark = (e: React.MouseEvent<HTMLButtonElement>) => {
    let darkState = e.currentTarget.getAttribute("data-state")
    darkState === "checked" ? setTheme("light") : setTheme("dark")
    setDark(!isDark)
  }

  return (
    <>
      {isDark ? <Sun /> :  <Moon />}
      <Switch onClick={toggleDark} id="Dark-mode" />
    </>
  )
}
