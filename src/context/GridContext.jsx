import { createContext, useState, useEffect } from "react";

export const GridContext = createContext();
GridContext.displayName = "GridContext";

export const GridProvider = ({ children }) => {
  const [pieces, setPieces] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [totalPieces, setTotalPieces] = useState(0);
  const [totalValue, setTotalValue] = useState(0);

  const addSelectedCard = (card) => {
    const id = selectedCards.length
      ? selectedCards[selectedCards.length - 1].id + 1
      : 1;
    const newList = {
      id,
      name: card.name,
      description: card.description,
      value: card.value,
      image: card.image,
    };
    setSelectedCards([...selectedCards, newList]);
  };

  const removeSelectedCard = (id) => {
    if (!selectedCards || !selectedCards.some((card) => card.id === id)) return;
    const updatedCards = selectedCards.filter((card) => card.id !== id);
    setSelectedCards(updatedCards);
  };

  const clearContextInfo = () => {
    setSelectedCards([]);
    setTotalPieces(0);
    setTotalValue(0);
  };

  useEffect(() => {
    let pieces = 0;
    let value = 0;

    selectedCards.forEach((card) => {
      pieces += 1;
      value += card.value;
    });

    setTotalPieces(pieces);
    setTotalValue(value);
  }, [selectedCards]);

  // Função para fazer a requisição à API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/pieces");
        const data = await response.json();
        setPieces(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <GridContext.Provider
      value={{
        pieces,
        selectedCards,
        addSelectedCard,
        removeSelectedCard,
        totalPieces,
        totalValue,
        clearContextInfo,
      }}
    >
      {children}
    </GridContext.Provider>
  );
};
