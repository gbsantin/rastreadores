"use client"

import { 
  LayoutDashboard, 
  Map, 
  Smartphone, 
  History, 
  Settings, 
  Users,
  Activity
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navigation = [
  {
    name: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Mapa",
    href: "/map",
    icon: Map,
  },
  {
    name: "Dispositivos",
    href: "/devices",
    icon: Smartphone,
  },
  {
    name: "Histórico",
    href: "/history",
    icon: History,
  },
  {
    name: "Relatórios",
    href: "/reports",
    icon: Activity,
  },
  {
    name: "Usuários",
    href: "/users",
    icon: Users,
  },
  {
    name: "Configurações",
    href: "/settings",
    icon: Settings,
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-64 border-r border-sapphire bg-sapphire">
      <nav className="flex flex-col gap-1 p-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "group flex items-center gap-3 rounded-md px-4 py-3 text-sm font-medium transition-colors",
                isActive
                  ? "bg-celadon text-white shadow-sm"
                  : "text-white/90 hover:bg-sapphire-light hover:text-white"
              )}
            >
              <item.icon
                className={cn(
                  "h-5 w-5 transition-colors",
                  isActive ? "text-white" : "text-white/80 group-hover:text-white"
                )}
              />
              <span>{item.name}</span>
              {isActive && (
                <div className="ml-auto h-1.5 w-1.5 rounded-full bg-white" />
              )}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
