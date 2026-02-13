"use client";

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Clock, Menu, Utensils, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

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
      </div>
    </div>
  );
}

export default Dashboard;
