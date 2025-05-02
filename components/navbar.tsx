"use client"

import { Bell, Menu, User, Search, BarChart2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface NavbarProps {
  onSearchToggle?: () => void
  onDashboardToggle?: () => void
}

export function Navbar({ onSearchToggle, onDashboardToggle }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[300px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Button variant="ghost" className="justify-start" onClick={onDashboardToggle}>
                  <BarChart2 className="h-4 w-4 mr-2" />
                  Dashboard
                </Button>
                <Button variant="ghost" className="justify-start">
                  Pedidos
                </Button>
                <Button variant="ghost" className="justify-start">
                  Clientes
                </Button>
                <Button variant="ghost" className="justify-start">
                  Menú
                </Button>
                <Button variant="ghost" className="justify-start">
                  Configuración
                </Button>
                <Button variant="ghost" className="justify-start" onClick={onSearchToggle}>
                  <Search className="h-4 w-4 mr-2" />
                  Buscar Pedidos
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-full bg-green-200 flex items-center justify-center">
              <span className="text-green-800 text-xs font-bold">LS</span>
            </div>
            <span className="font-bold text-xl hidden sm:inline-block">La Seibeña</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Button variant="ghost" className="text-sm font-medium" onClick={onDashboardToggle}>
            Dashboard
          </Button>
          <Button variant="ghost" className="text-sm font-medium">
            Pedidos
          </Button>
          <Button variant="ghost" className="text-sm font-medium">
            Clientes
          </Button>
          <Button variant="ghost" className="text-sm font-medium">
            Menú
          </Button>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative" onClick={onSearchToggle}>
            <Search className="h-5 w-5" />
            <span className="sr-only">Buscar</span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
                <span className="sr-only">Notificaciones</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Notificaciones</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Nuevo pedido recibido</DropdownMenuItem>
              <DropdownMenuItem>Pedido #123 listo para entrega</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">Usuario</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Perfil</DropdownMenuItem>
              <DropdownMenuItem>Configuración</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Cerrar sesión</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

