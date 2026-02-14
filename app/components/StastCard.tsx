import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function StastCard({ title, value, description, icon }) {
  return (
    <div>
      <Card className="transiton-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-amber-200">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          {icon}
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{value}</div>
          <p className="text-xs text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default StastCard;
