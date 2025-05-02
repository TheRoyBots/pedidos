"use client"

import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dashboard } from "./dashboard"

interface DashboardScreenProps {
  totalPedidos: number
  pendientes: number
  listos: number
  onClose: () => void
}

export function DashboardScreen({ totalPedidos, pendientes, listos, onClose }: DashboardScreenProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={onClose}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h2 className="text-xl font-semibold">Dashboard</h2>
      </div>

      <Dashboard totalPedidos={totalPedidos} pendientes={pendientes} listos={listos} isFullScreen={true} />
    </div>
  )
}

