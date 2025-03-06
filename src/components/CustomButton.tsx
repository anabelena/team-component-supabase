"use client";

import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";

type CustomButtonProps = {
    label:string,
    variant?:any,
    loading:boolean,
    onClick:()=>void
}

export default function CustomButton({
  label,
  variant = "default",
  loading,
  onClick,
}: CustomButtonProps) {
  if (loading)
    return (
      <Button variant="outline" disabled>
        <Loader2 className="animate-spin" />
      </Button>
    );

  return (
    <Button variant={variant} onClick={onClick}>
      {label}
    </Button>
  );
}
