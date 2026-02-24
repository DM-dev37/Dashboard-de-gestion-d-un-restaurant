import React from "react";

function StatusTable({
  number,
  status,
  time,
}: {
  number: number;
  status: string;
  time?: string;
}) {
  const getStatusColor = () => {
    switch (status) {
      case "occupied":
        return "bg-red-100 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-400 dark:border-red-900";
      case "reserved":
        return "bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-950 dark:text-amber-400 dark:border-amber-900";
      case "available":
        return "bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-400 dark:border-emerald-900";
      default:
        return "bg-zinc-100 text-zinc-700 border-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:border-zinc-700";
    }
  };
  const getStatusText = () => {
    switch (status) {
      case "occupied":
        return "Occupée";
      case "reserved":
        return "Réservée";
      case "available":
        return "Libre";
      default:
        return "Inconnue";
    }
  };
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-lg border p-2 ${getStatusColor()}`}
    >
      <span className="text-lg font-semibold">#{number}</span>
      <span className="text-xs">{getStatusText()}</span>
      {time && <span className="text-xs">{time}</span>}
    </div>
  );
}

export default StatusTable;
