import { useState } from "react";

export const useHelpers = () => {
    
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string | undefined>(undefined);

  return {
    loading,
    setLoading,
    open,
    setOpen,
    selected,
    setSelected,
  };
};
