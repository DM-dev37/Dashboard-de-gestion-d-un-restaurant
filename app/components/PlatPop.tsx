import { Progress } from "@/components/ui/progress";
import { Coffee } from "lucide-react";
import React from "react";

function PlatPop({ name, percentage, orders }) {
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Coffee className="size-5 text-amber-400" />
          <span className="text-sm font-medium">{name}</span>
        </div>
        <span className="text-sm text-muted-foreground">{orders} cmd</span>
      </div>
      <Progress
        value={percentage}
        className="h-2 bg-amber-100 [&>div]:bg-gradient-to-r [&>div]:from-amber-200 [&>div]:to-amber-500"
      />
    </div>
  );
}

export default PlatPop;
