// React
import React, { useState } from "react";
import { useContext } from "react";

// import Styles
import * as C from "./styles";

import { GridContext } from "../../context/GridContext";

const GridItems = ({ piece }) => {
  const { addSelectedCard } = useContext(GridContext);

  const handleCardClick = (novoCard) => {
    addSelectedCard(novoCard);
  };

  return (
    <C.GridItems onClick={() => handleCardClick(piece)}>
      <C.NameIcon>{piece.name}</C.NameIcon>
      <C.ItemDesc>{piece.description}</C.ItemDesc>
      <C.Icon>
        <C.ImageIcon src={piece.image} alt={piece.name} />
      </C.Icon>
      <C.Points>{piece.value}</C.Points>
    </C.GridItems>
  );
};

export default GridItems;
