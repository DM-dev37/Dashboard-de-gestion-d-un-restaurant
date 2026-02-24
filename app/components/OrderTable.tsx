import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowUpDown, Check, Clock, MoreHorizontalIcon, X } from "lucide-react";
import React, { useMemo, useState } from "react";

function OrderTable({ limit }: { limit?: string }) {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const ordersData = [
    {
      id: "ORD-001", // Identifiant unique de la commande
      customer: "Table 3", // Client ou table associée
      items: [
        { name: "Risotto aux truffes", quantity: 2 },
        { name: "Tiramisu", quantity: 2 },
      ],
      total: "€96.00", // Montant total de la commande
      status: "completed", // Statut de la commande
      time: "19:30", // Heure de commande
      waiter: "Sophie", // Serveur assigné
    },
    {
      id: "ORD-002",
      customer: "Table 8",
      items: [
        { name: "Filet mignon", quantity: 1 },
        { name: "Saumon grillé", quantity: 1 },
        { name: "Vin rouge", quantity: 1 },
      ],
      total: "€87.50",
      status: "in-progress",
      time: "19:45",
      waiter: "Thomas",
    },
    {
      id: "ORD-003",
      customer: "Table 5",
      items: [
        { name: "Pâtes carbonara", quantity: 3 },
        { name: "Salade César", quantity: 1 },
        { name: "Eau minérale", quantity: 1 },
      ],
      total: "€64.75",
      status: "pending",
      time: "20:00",
      waiter: "Marie",
    },
    {
      id: "ORD-004",
      customer: "Table 12",
      items: [
        { name: "Plateau de fromages", quantity: 1 },
        { name: "Foie gras", quantity: 2 },
        { name: "Champagne", quantity: 1 },
      ],
      total: "€112.00",
      status: "in-progress",
      time: "19:15",
      waiter: "Pierre",
    },
    {
      id: "ORD-005",
      customer: "Table 7",
      items: [
        { name: "Burger gourmet", quantity: 2 },
        { name: "Frites maison", quantity: 2 },
        { name: "Bière artisanale", quantity: 2 },
      ],
      total: "€58.00",
      status: "completed",
      time: "18:45",
      waiter: "Julie",
    },
  ];

  const filteredOrders = useMemo(() => {
    // Convertir limit en nombre si nécessaire
    const limitNumber = limit ? parseInt(limit) : undefined;

    return ordersData
      .filter((order) => {
        if (!search) return true;

        const searchLower = search.toLowerCase();
        return (
          order.id.toLowerCase().includes(searchLower) ||
          order.customer.toLowerCase().includes(searchLower) ||
          order.items.some((item) =>
            item.name.toLowerCase().includes(searchLower),
          )
        );
      })
      .filter((order) => {
        if (statusFilter === "all") return true;
        return order.status === statusFilter;
      })
      .slice(0, limitNumber !== undefined ? limitNumber : ordersData.length);
  }, [search, statusFilter, limit, ordersData]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <Badge className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-600 shadow-sm">
            <Check className="mr-1 size-3" /> en attente
          </Badge>
        );
      case "in-progress":
        return (
          <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-600 shadow-sm">
            <Clock className="mr-1 size-3" /> en attente
          </Badge>
        );
      case "pending":
        return (
          <Badge
            variant={"outline"}
            className="bg-amber-50 text-amber-500 dark:bg-amber-950 shadow-sm"
          >
            en attente
          </Badge>
        );
      case "cancelled":
        return (
          <Badge variant={"destructive"} className="">
            <X className="mr-1 size-3" /> annulee
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {!limit && (
        <div className="flex flex-col gap-4 md:flex-row">
          <Input
            placeholder="Rechercher une commande"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="sm:max-w-xs"
          />
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="sm:max-w-xs">
              <SelectValue placeholder="Filtre par statut" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous les status</SelectItem>
              <SelectItem value="pending">En attente</SelectItem>
              <SelectItem value="in-progress">En cours</SelectItem>
              <SelectItem value="completed">Terminee</SelectItem>
              <SelectItem value="ca,celled">Annulee</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w[100px]">
                <Button variant={"ghost"} className="p-0 font-medium">
                  ID <ArrowUpDown className="size-4 ml-2" />
                </Button>
              </TableHead>
              <TableHead>Clients</TableHead>
              <TableHead>Articles</TableHead>
              <TableHead>Totals</TableHead>
              <TableHead>Statuts</TableHead>
              <TableHead>Heures</TableHead>
              <TableHead>Serveur</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell className="flex flex-col gap-1">
                    {order.items.map((item, index) => (
                      <div key={index} className="text-sm">
                        {item.name} * {item.quantity}
                      </div>
                    ))}
                  </TableCell>
                  <TableCell>{order.total}</TableCell>
                  <TableCell>{getStatusBadge(order.status)}</TableCell>
                  <TableCell>{order.time}</TableCell>
                  <TableCell>{order.waiter}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant={"ghost"} size={"icon"}>
                          <MoreHorizontalIcon className="size-5 " />
                          <span className="sr-only">Menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Voir les Details</DropdownMenuItem>
                        <DropdownMenuItem>
                          Modiffier la commande
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          Marque comme terminee
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          Annulee
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={8} className="h-24 text-center">
                  Aucune commande trouvee
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default OrderTable;
