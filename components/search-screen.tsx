"use client"

import { Search, ArrowLeft } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface SearchScreenProps {
  searchTerm: string
  setSearchTerm: (term: string) => void
  onClose: () => void
}

export function SearchScreen({ searchTerm, setSearchTerm, onClose }: SearchScreenProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={onClose}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h2 className="text-xl font-semibold">Buscar Pedidos</h2>
      </div>

      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Buscar por cliente o tipo de pedido..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Filtrar por tipo</label>
          <Select defaultValue="todos">
            <SelectTrigger>
              <SelectValue placeholder="Filtrar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos los pedidos</SelectItem>
              <SelectItem value="combo">Combo Familiar</SelectItem>
              <SelectItem value="individual">Plato Individual</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Estado del pedido</label>
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" className="justify-start">
              <span className="h-2 w-2 rounded-full bg-amber-500 mr-2"></span>
              Pendientes
            </Button>
            <Button variant="outline" className="justify-start">
              <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
              Listos
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Ordenar por</label>
          <Select defaultValue="reciente">
            <SelectTrigger>
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="reciente">Más reciente</SelectItem>
              <SelectItem value="antiguo">Más antiguo</SelectItem>
              <SelectItem value="precio-alto">Precio: Mayor a menor</SelectItem>
              <SelectItem value="precio-bajo">Precio: Menor a mayor</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button className="w-full">Aplicar filtros</Button>
      </div>
    </div>
  )
}

