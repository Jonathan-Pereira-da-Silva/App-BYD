import React, { createContext, useState, ReactNode } from "react";

interface ListaDesejosContextType {
  listaDesejos: number[];
  adicionarDesejo: (id: number) => void;
  removerDesejo: (id: number) => void;
}

export const ListaDesejosContext = createContext<ListaDesejosContextType>({
  listaDesejos: [],
  adicionarDesejo: () => {},
  removerDesejo: () => {},
});

interface ProviderProps {
  children: ReactNode;
}

export const ListaDesejosProvider: React.FC<ProviderProps> = ({ children }) => {
  const [listaDesejos, setListaDesejos] = useState<number[]>([]);

  const adicionarDesejo = (id: number) => {
    if (!listaDesejos.includes(id)) {
      setListaDesejos([...listaDesejos, id]);
    }
  };

  const removerDesejo = (id: number) => {
    setListaDesejos(listaDesejos.filter(itemId => itemId !== id));
  };

  return (
    <ListaDesejosContext.Provider value={{ listaDesejos, adicionarDesejo, removerDesejo }}>
      {children}
    </ListaDesejosContext.Provider>
  );
};