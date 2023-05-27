// import Styles
import * as C from "./styles";

// import React
import React, { useState, useEffect, useContext } from "react";

// import Components
import GridItems from "../GridItems";

// Import GridContext
import { GridContext } from "../../context/GridContext";

const GridStep1 = () => {
  const { pieces } = useContext(GridContext);

  return (
    <C.GridStep1>
      <h3>Passo 01 - Selecione peças</h3>
      <C.FlexGrid>
        <C.GridItemsMap>
          {pieces.map((piece) => (
            <GridItems key={piece.id} piece={piece} />
          ))}
        </C.GridItemsMap>
      </C.FlexGrid>
    </C.GridStep1>
  );
};

export default GridStep1;
