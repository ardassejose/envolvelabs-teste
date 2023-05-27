// import Styles
import * as C from "./styles";

// import Components
import ItemsSelected from "../ItemsSelected";
import React, { useContext } from "react";

import { GridContext } from "../../context/GridContext";

const GridStep2 = () => {
  const { selectedCards } = useContext(GridContext);

  return (
    <C.GridStep2>
      <h3>Passo 02 - Revise a seleção</h3>
      {selectedCards.map((selected, index) => (
        <ItemsSelected key={index} selected={selected} />
      ))}
    </C.GridStep2>
  );
};

export default GridStep2;
