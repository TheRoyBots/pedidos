import { Clock, CheckCircle, ShoppingBag } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface DashboardProps {
  totalPedidos: number
  pendientes: number
  listos: number
}

export function Dashboard({
  totalPedidos,
  pendientes,
  listos,
  isFullScreen = false,
}: DashboardProps & { isFullScreen?: boolean }) {
  const statsCards = (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Pedidos</CardTitle>
          <ShoppingBag className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalPedidos}</div>
          <p className="text-xs text-muted-foreground">Pedidos del día</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Pendientes</CardTitle>
          <Clock className="h-4 w-4 text-amber-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{pendientes}</div>
          <p className="text-xs text-muted-foreground">Pedidos en preparación</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Listos</CardTitle>
          <CheckCircle className="h-4 w-4 text-green-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{listos}</div>
          <p className="text-xs text-muted-foreground">Pedidos completados</p>
        </CardContent>
      </Card>
    </>
  )

  if (isFullScreen) {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <div className="grid gap-4 md:grid-cols-3">{statsCards}</div>

        <div className="mt-8">
          <h3 className="text-lg font-medium mb-4">Resumen de Ventas</h3>
          <Card>
            <CardContent className="p-6">
              <div className="h-[200px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                <p className="text-muted-foreground">Gráfico de ventas diarias</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Productos Más Vendidos</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex justify-between items-center">
                  <span>Combo Familiar</span>
                  <span className="font-medium">65%</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Plato Individual</span>
                  <span className="font-medium">25%</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Bebidas</span>
                  <span className="font-medium">10%</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Horarios Pico</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex justify-between items-center">
                  <span>12:00 - 14:00</span>
                  <span className="font-medium">45%</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>18:00 - 20:00</span>
                  <span className="font-medium">35%</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Otros horarios</span>
                  <span className="font-medium">20%</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return <div className="grid gap-4 md:grid-cols-3">{statsCards}</div>
}

