"use client"

import { MapPin, Menu, Bell, User, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-sapphire bg-prussian">
      <div className="flex h-16 items-center px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-carolina">
            <MapPin className="h-6 w-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-white">Traccar</span>
            <span className="text-xs text-azure/80">GPS Tracking</span>
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-white hover:bg-sapphire">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notificações</span>
          </Button>
          
          <div className="flex items-center gap-3 pl-4 border-l border-sapphire">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/avatar.jpg" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div className="hidden md:flex flex-col">
              <span className="text-sm font-medium text-white">Admin</span>
              <span className="text-xs text-azure/70">admin@traccar.com</span>
            </div>
            <Button variant="ghost" size="icon" className="text-white hover:bg-sapphire">
              <LogOut className="h-5 w-5" />
              <span className="sr-only">Sair</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
