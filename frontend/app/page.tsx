"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Activity, Clock, Navigation } from "lucide-react"

// Mock data - substituir com dados reais da API
const devices = [
  {
    id: 1,
    name: "Bike 001",
    type: "Bike",
    status: "online",
    location: "São Paulo, SP",
    lastUpdate: "2 min atrás",
    speed: "25 km/h",
  },
  {
    id: 2,
    name: "Helmet 002",
    type: "Helmet",
    status: "online",
    location: "Rio de Janeiro, RJ",
    lastUpdate: "5 min atrás",
    speed: "0 km/h",
  },
  {
    id: 3,
    name: "Vehicle 003",
    type: "Vehicle",
    status: "offline",
    location: "Belo Horizonte, MG",
    lastUpdate: "1 hora atrás",
    speed: "0 km/h",
  },
]

const filters = ["All", "Bike", "Helmet", "Hazard", "Vehicle"]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-darkNavy">Dashboard</h1>
          <p className="text-cinzaMedio mt-1">Visão geral dos seus dispositivos</p>
        </div>
        <Button className="bg-carolina hover:bg-carolina-light">
          <MapPin className="mr-2 h-4 w-4" />
          Adicionar Dispositivo
        </Button>
      </div>

      {/* Filtros */}
      <div className="flex gap-2 flex-wrap">
        {filters.map((filter) => (
          <Badge
            key={filter}
            variant={filter === "All" ? "default" : "outline"}
            className="cursor-pointer px-4 py-1.5 text-sm"
          >
            {filter}
          </Badge>
        ))}
      </div>

      {/* Grid Principal */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Mapa - Ocupa 2 colunas */}
        <div className="lg:col-span-2">
          <Card className="h-[600px]">
            <CardHeader>
              <CardTitle>Mapa de Rastreamento</CardTitle>
              <CardDescription>Visualize a localização dos seus dispositivos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[500px] w-full rounded-lg bg-azure flex items-center justify-center border-2 border-dashed border-celadon">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-celadon mx-auto mb-4" />
                  <p className="text-cinzaMedio">Mapa será integrado aqui</p>
                  <p className="text-sm text-cinzaMedio mt-2">Google Maps / OpenStreetMap</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Lista de Dispositivos */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Dispositivos</CardTitle>
              <CardDescription>{devices.length} dispositivos cadastrados</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {devices.map((device) => (
                <Card key={device.id} className="border-celadon hover:shadow-medium transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3 flex-1">
                        <div className="h-12 w-12 rounded-lg bg-sapphire flex items-center justify-center">
                          <MapPin className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-darkNavy truncate">{device.name}</h3>
                            <Badge
                              variant={device.status === "online" ? "success" : "secondary"}
                              className="text-xs"
                            >
                              {device.status === "online" ? "Online" : "Offline"}
                            </Badge>
                          </div>
                          <p className="text-xs text-cinzaMedio mb-2">{device.type}</p>
                          <div className="flex items-center gap-4 text-xs text-cinzaMedio">
                            <span className="flex items-center gap-1">
                              <Navigation className="h-3 w-3" />
                              {device.speed}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {device.lastUpdate}
                            </span>
                          </div>
                          <p className="text-xs text-darkNavy mt-2 flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {device.location}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-3 pt-3 border-t border-azure">
                      <Button variant="outline" size="sm" className="flex-1">
                        Ver Detalhes
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Activity className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Cards de Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-cinzaMedio">Total de Dispositivos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-darkNavy">{devices.length}</div>
            <p className="text-xs text-cinzaMedio mt-1">Todos os dispositivos</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-cinzaMedio">Online</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {devices.filter((d) => d.status === "online").length}
            </div>
            <p className="text-xs text-cinzaMedio mt-1">Dispositivos ativos</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-cinzaMedio">Em Movimento</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-carolina">
              {devices.filter((d) => d.speed !== "0 km/h").length}
            </div>
            <p className="text-xs text-cinzaMedio mt-1">Dispositivos em trânsito</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-cinzaMedio">Offline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-cinzaMedio">
              {devices.filter((d) => d.status === "offline").length}
            </div>
            <p className="text-xs text-cinzaMedio mt-1">Dispositivos inativos</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
