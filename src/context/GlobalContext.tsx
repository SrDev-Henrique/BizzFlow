"use client";

import { createContext, useContext, useState } from "react";

interface MenuContextType {
  isFilterOpen: boolean;
  setIsFilterOpen: (isOpen: boolean) => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <MenuContext.Provider
      value={{
        isFilterOpen,
        setIsFilterOpen,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useGlobalContext precisa ser usado dentro de um GlobalProvider");
  }
  return context;
};
