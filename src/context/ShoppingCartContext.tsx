import { createContext, ReactNode, useContext } from "react";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

const ShoppingCartContext = createContext({});

export const useShoppingCart = () => {
  useContext(ShoppingCartContext);
};

export const ShoppingCardProvider = ({
  children,
}: ShoppingCartProviderProps) => {
  <ShoppingCartContext.Provider value={{}}>
    {children}
  </ShoppingCartContext.Provider>;
};
