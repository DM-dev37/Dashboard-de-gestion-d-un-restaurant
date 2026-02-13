import {
  BarChart3,
  Calendar,
  ChefHatIcon,
  Home,
  Menu,
  MessageSquare,
  Settings,
  ShoppingBag,
  Users,
  Utensils,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

function Sidebar() {
  return (
    <div className="flex flex-col h-full">
      {/* logo */}
      <div className="flex items-center gap-2 border-b border-zinc-400 p-4 dark:border-zinc-800 lg:h-16">
        <Utensils className="size-6 text-amber-400" />
        <span className="text-lg font-semibold">GOURMET HUB</span>
      </div>

      {/* zone de defillement */}
      <ScrollArea className="flex-1 py-2 ">
        <nav className="grid gap-1 px-2">
          <Button className="justify-start" variant={"ghost"} asChild>
            <a href="#" className="flex items-center gap-2 ">
              <Home className="size-5" />
              Tableau de bord
            </a>
          </Button>
          <Button className="justify-start" variant={"ghost"} asChild>
            <a href="#" className="flex items-center gap-2">
              <ShoppingBag className="size-5" />
              Commandes
            </a>
          </Button>
          <Button className="justify-start" variant={"ghost"} asChild>
            <a href="#" className="flex items-center gap-2">
              <Calendar className="size-5" />
              Reservation
            </a>
          </Button>
          <Button className="justify-start" variant={"ghost"} asChild>
            <a href="#" className="flex items-center gap-2">
              <Menu className="size-5" />
              Menu
            </a>
          </Button>
          <Button className="justify-start" variant={"ghost"} asChild>
            <a href="#" className="flex items-center gap-2">
              <Users className="size-5" />
              Personnels
            </a>
          </Button>
          <Button className="justify-start" variant={"ghost"} asChild>
            <a href="#" className="flex items-center gap-2">
              <BarChart3 className="size-5" />
              Statistiques
            </a>
          </Button>
          <Button className="justify-start" variant={"ghost"} asChild>
            <a href="#" className="flex items-center gap-2">
              <MessageSquare className="size-5" />
              Avis Clients
            </a>
          </Button>
          <Button className="justify-start" variant={"ghost"} asChild>
            <a href="#" className="flex items-center gap-2">
              <Settings className="size-5" />
              Paramètres
            </a>
          </Button>
        </nav>
      </ScrollArea>

      {/* user connect */}
      <div className="mt-auto border-t border-zinc-200 dark:border-zinc-800 p-4">
        <div className="flex items-center space-x-3 rounded-lg bg-zinc-100 p-3 dark:bg-zinc-800">
          <div className="flex items-center  justify-center rounded-full h-9 w-9 bg-amber-100 dark:bg-amber-700">
            <ChefHatIcon className="size-6  text-amber-600 p-5 dark:text-amber-400" />
          </div>

          <div className="flex-1 space-y-1">
            <p className="text-sm font-semibold">Chef Antoine</p>
            <p className="text-xs text-muted-foreground">Chef exécutive</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
