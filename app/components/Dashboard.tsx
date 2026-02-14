/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import {
  Calendar,
  Clock,
  DollarSign,
  Menu,
  ShoppingBag,
  Users,
  Utensils,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StastCard from "./StastCard";

function Dashboard() {
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-950">
      <aside className="hidden lg:block w-64 border-r border-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 bg-white">
        <Sidebar />
      </aside>

      {/* affichage conditionnel de la barre sur les petits ecrans */}

      {isSidebar && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute insert-0 bg-zinc-900/50 backdrop-blur-sm"
            onClick={() => setIsSidebar(false)}
          />
          <aside className="absolute left-0 top-0 h-full w-64 border-r border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
            <div className="flex items-center border-b border-zinc-200 p-4 dark:border-zinc-800 space-x-4">
              <div className="flex items-center gap-2">
                <Utensils className="size-6 text-amber-400" />
                <span className="text-lg font-semibold">GOURMET HUB</span>
              </div>
              <Button
                size={"icon"}
                variant={"ghost"}
                onClick={() => setIsSidebar(false)}
              >
                <X className="size-5" />
              </Button>
            </div>
            <Sidebar />
          </aside>
        </div>
      )}

      {/* contenu principale */}
      <div className="flex-1">
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-zinc-200 bg-white/80 p-4 backdrup-blur-sm lg:p-6 dark:border-zinc-800 dark:bg-zinc-950">
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              size={"icon"}
              variant={"ghost"}
              onClick={() => setIsSidebar(true)}
            >
              <Menu className="size-5" />
            </Button>

            <div className="flex items-center gap-2">
              <Utensils className="size-6 text-amber-400" />
              <span className="text-lg font-semibold">GOURMET HUB</span>
            </div>
          </div>

          <div className="ml-auto flex items-center gap-4">
            <Button variant={"outline"} size={"sm"} className="hidden md:flex">
              <Clock className="size-5" />
              Ouvrir le restaurant
            </Button>
            <Avatar style={{ cursor: "pointer" }}>
              <AvatarFallback>CH</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* contenu du tabkeau de bord */}
        <main className="p-4">
          <div className="mb-8">
            <h1 className="text-2xl font-bold md:text-3xl tracking-tight">
              Tableau de bord
            </h1>
            <p className="text-muted-foreground">
              Bienvenue chef! Voici l'apercu de votre restaurant aujourd'hui.
            </p>
          </div>

          {/* onglets de nav ou de tabs */}
          <Tabs defaultValue="overview" className="space-y-6">
            <div className="flex items-center justify-between">
              <TabsList>
                <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
                <TabsTrigger value="livre">Commandes</TabsTrigger>
                <TabsTrigger value="reserve">Reservations</TabsTrigger>
                <TabsTrigger value="staff">Personnels</TabsTrigger>
              </TabsList>

              <div className="hidden md:flex items-center gap-2">
                <Button variant={"outline"} size={"sm"}>
                  <Calendar className="size-5 mr-2" />
                  Aujourd'hui
                </Button>
              </div>
            </div>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-4">
                <StastCard
                  title={"Chiffre d'affaire"}
                  value={"2,850 $"}
                  description={"+18% par rapprt a hier"}
                  icon={<DollarSign className="size-5 text-emerald-500" />}
                />
                <StastCard
                  title={"Commandes"}
                  value={"115"}
                  description={"+24% par rapprt a hier"}
                  icon={<ShoppingBag className="size-5 text-blue-500" />}
                />
                <StastCard
                  title={"Clients"}
                  value={"289"}
                  description={"+12% par rapprt a hier"}
                  icon={<Users className="size-5 text-indigo-500" />}
                />
                <StastCard
                  title={"Reservions"}
                  value={"32"}
                  description={"+8% par rapprt a hier"}
                  icon={<Calendar className="size-5 text-amber-500" />}
                />
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
