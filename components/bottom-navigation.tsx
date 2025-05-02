"use client"

import { Search, Clock, CheckCircle, BarChart2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface BottomNavigationProps {
  activeTab: string
  onTabChange: (tab: string) => void
  onSearchToggle: () => void
  onDashboardToggle: () => void
  isSearchActive: boolean
  isDashboardActive: boolean
}

export function BottomNavigation({
  activeTab,
  onTabChange,
  onSearchToggle,
  onDashboardToggle,
  isSearchActive,
  isDashboardActive,
}: BottomNavigationProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 border-t bg-background z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-around py-2">
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "flex flex-col items-center justify-center h-16 w-16 rounded-none",
              isDashboardActive && "text-primary border-t-2 border-primary",
            )}
            onClick={onDashboardToggle}
          >
            <BarChart2 className="h-5 w-5" />
            <span className="text-xs mt-1">Dashboard</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "flex flex-col items-center justify-center h-16 w-16 rounded-none",
              activeTab === "pendientes" &&
                !isSearchActive &&
                !isDashboardActive &&
                "text-amber-500 border-t-2 border-amber-500",
            )}
            onClick={() => {
              if (isSearchActive || isDashboardActive) {
                onSearchToggle()
                onDashboardToggle()
              }
              onTabChange("pendientes")
            }}
          >
            <Clock className="h-5 w-5" />
            <span className="text-xs mt-1">Pendientes</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "flex flex-col items-center justify-center h-16 w-16 rounded-none",
              activeTab === "listos" &&
                !isSearchActive &&
                !isDashboardActive &&
                "text-green-500 border-t-2 border-green-500",
            )}
            onClick={() => {
              if (isSearchActive || isDashboardActive) {
                onSearchToggle()
                onDashboardToggle()
              }
              onTabChange("listos")
            }}
          >
            <CheckCircle className="h-5 w-5" />
            <span className="text-xs mt-1">Listos</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "flex flex-col items-center justify-center h-16 w-16 rounded-none",
              isSearchActive && "text-primary border-t-2 border-primary",
            )}
            onClick={onSearchToggle}
          >
            <Search className="h-5 w-5" />
            <span className="text-xs mt-1">Buscar</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

