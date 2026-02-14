import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useState } from "react";

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
  return (
    <div>
      {!limit && (
        <div className="flex flex-col gap-4 md:flex-row">
          <Input
            placeholder="Rechercher une commande"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="sm:max-w-sx"
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
              <SelectItem value="selled">Annulee</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}
    </div>
  );
}

export default OrderTable;
