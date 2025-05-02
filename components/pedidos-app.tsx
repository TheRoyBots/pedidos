"use client"

import { useState } from "react"
import { Navbar } from "./navbar"
import { PedidosPendientes } from "./pedidos-pendientes"
import { PedidosListos } from "./pedidos-listos"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BottomNavigation } from "./bottom-navigation"
import { SearchScreen } from "./search-screen"
import { DashboardScreen } from "./dashboard-screen"

// Definir la interfaz para los pedidos
interface Pedido {
  id: string
  cliente: string
  detalle: string
  precio: number
  tiempo: string
  estado: "pendiente" | "listo"
}

export function PedidosApp() {
  // Estado inicial con los pedidos del ejemplo
  const [pedidos, setPedidos] = useState<Pedido[]>([
    {
      id: "1",
      cliente: "Héctor Ramires",
      detalle: "Combo Familiar",
      precio: 250,
      tiempo: "10:30 AM",
      estado: "pendiente",
    },
    {
      id: "2",
      cliente: "Sergio Madrid",
      detalle: "Combo Familiar",
      precio: 250,
      tiempo: "10:45 AM",
      estado: "pendiente",
    },
    {
      id: "3",
      cliente: "Caren Laines",
      detalle: "Combo Familiar",
      precio: 250,
      tiempo: "11:00 AM",
      estado: "pendiente",
    },
    {
      id: "4",
      cliente: "Jose Suniga",
      detalle: "Combo Familiar",
      precio: 250,
      tiempo: "11:15 AM",
      estado: "pendiente",
    },
    {
      id: "5",
      cliente: "Eymi Carcamos",
      detalle: "Combo Familiar",
      precio: 250,
      tiempo: "11:30 AM",
      estado: "pendiente",
    },
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("pendientes")
  const [showSearch, setShowSearch] = useState(false)
  const [showDashboard, setShowDashboard] = useState(false)

  // Función para marcar un pedido como listo
  const marcarComoListo = (id: string) => {
    setPedidos(pedidos.map((pedido) => (pedido.id === id ? { ...pedido, estado: "listo" } : pedido)))
  }

  // Función para devolver un pedido a pendientes
  const devolverAPendiente = (id: string) => {
    setPedidos(pedidos.map((pedido) => (pedido.id === id ? { ...pedido, estado: "pendiente" } : pedido)))
  }

  // Filtrar pedidos según el término de búsqueda
  const pedidosFiltrados = pedidos.filter(
    (pedido) =>
      pedido.cliente.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pedido.detalle.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Separar pedidos por estado
  const pedidosPendientes = pedidosFiltrados.filter((pedido) => pedido.estado === "pendiente")
  const pedidosListos = pedidosFiltrados.filter((pedido) => pedido.estado === "listo")

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar
        onSearchToggle={() => {
          setShowSearch(!showSearch)
          setShowDashboard(false)
        }}
        onDashboardToggle={() => {
          setShowDashboard(!showDashboard)
          setShowSearch(false)
        }}
      />

      <div className="container mx-auto px-4 py-6 pb-20">
        {!showSearch && !showDashboard && (
          <>
            <Tabs defaultValue="pendientes" className="w-full" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="pendientes" className="relative">
                  Pendientes
                  {pedidosPendientes.length > 0 && (
                    <span className="absolute top-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                      {pedidosPendientes.length}
                    </span>
                  )}
                </TabsTrigger>
                <TabsTrigger value="listos" className="relative">
                  Listos
                  {pedidosListos.length > 0 && (
                    <span className="absolute top-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-[10px] text-white">
                      {pedidosListos.length}
                    </span>
                  )}
                </TabsTrigger>
              </TabsList>
              <TabsContent value="pendientes" className="mt-4">
                <PedidosPendientes pedidos={pedidosPendientes} onMarcarListo={marcarComoListo} />
              </TabsContent>
              <TabsContent value="listos" className="mt-4">
                <PedidosListos pedidos={pedidosListos} onDevolverAPendiente={devolverAPendiente} />
              </TabsContent>
            </Tabs>
          </>
        )}

        {showSearch && (
          <SearchScreen searchTerm={searchTerm} setSearchTerm={setSearchTerm} onClose={() => setShowSearch(false)} />
        )}

        {showDashboard && (
          <DashboardScreen
            totalPedidos={pedidos.length}
            pendientes={pedidosPendientes.length}
            listos={pedidosListos.length}
            onClose={() => setShowDashboard(false)}
          />
        )}
      </div>

      <BottomNavigation
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onSearchToggle={() => {
          setShowSearch(!showSearch)
          setShowDashboard(false)
        }}
        onDashboardToggle={() => {
          setShowDashboard(!showDashboard)
          setShowSearch(false)
        }}
        isSearchActive={showSearch}
        isDashboardActive={showDashboard}
      />
    </div>
  )
}

