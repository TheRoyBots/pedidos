"use client"

import { Bell, CheckCircle, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Pedido {
  id: string
  cliente: string
  detalle: string
  precio: number
  tiempo: string
  estado: "pendiente" | "listo"
}

interface PedidosPendientesProps {
  pedidos: Pedido[]
  onMarcarListo: (id: string) => void
}

export function PedidosPendientes({ pedidos, onMarcarListo }: PedidosPendientesProps) {
  if (pedidos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center">
        <CheckCircle className="h-12 w-12 text-green-500 mb-4" />
        <h3 className="text-lg font-medium">¡No hay pedidos pendientes!</h3>
        <p className="text-sm text-muted-foreground mt-2">Todos los pedidos han sido completados.</p>
      </div>
    )
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {pedidos.map((pedido) => (
        <Card key={pedido.id} className="overflow-hidden border-2 border-amber-100">
          <CardContent className="p-0">
            <div className="bg-amber-50 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                  <User className="h-5 w-5 text-green-700" />
                </div>
                <div>
                  <h3 className="font-semibold">{pedido.cliente}</h3>
                  <p className="text-sm text-muted-foreground">{pedido.tiempo}</p>
                </div>
              </div>
              <Bell className="h-5 w-5 text-amber-500" />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-3">
                <Badge variant="outline" className="bg-amber-50">
                  Pendiente
                </Badge>
                <span className="font-bold">${pedido.precio}</span>
              </div>
              <div className="mb-4">
                <h4 className="text-sm font-medium mb-1">Detalles del pedido:</h4>
                <p className="text-sm">{pedido.detalle}</p>
              </div>
              <Button className="w-full bg-green-500 hover:bg-green-600" onClick={() => onMarcarListo(pedido.id)}>
                Marcar como Listo
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

