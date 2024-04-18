import { useState } from "react";
import { IFilters } from "../../interfaces";

export const useFilters = (initial: IFilters) => {
  const [filters, setFilters] = useState<IFilters>(initial);

  const changeFilter = (key: string, value: string | null | number) => {
    setFilters((prev) => {
      return { ...prev, [key]: value };
    });
  };

  return { filters, changeFilter };
};
