import React, { useContext } from "react";

// import Styles
import Button from "../Button";
import * as C from "./styles";
import { GridContext } from "../../context/GridContext";

const GridStep3 = () => {
  const { clearContextInfo, totalPieces, totalValue } = useContext(GridContext);

  const handleReset = () => {
    clearContextInfo();
  };

  return (
    <C.GridStep3>
      <C.Flex>
        <C.FlexLeftSide>
          <h3>Passo 03 - Resumo da seleção</h3>

          <C.Quantity>
            <p>Quantidade de peças selecionados: </p>
            <C.QuantityBox>
              <p>{totalPieces}</p>
            </C.QuantityBox>
          </C.Quantity>
        </C.FlexLeftSide>

        <C.FlexRightSide>
          <C.Total>
            <p>Total: </p>
            <C.TotalBox>{totalValue}</C.TotalBox>
          </C.Total>

          <C.ButtonFlex onClick={handleReset}>
            <Button title={"Limpar tudo"} />
          </C.ButtonFlex>
        </C.FlexRightSide>
      </C.Flex>
    </C.GridStep3>
  );
};

export default GridStep3;
