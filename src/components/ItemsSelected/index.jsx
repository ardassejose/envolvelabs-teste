// import Styles
import * as C from "./styles";

// Import Context
import { GridContext } from "../../context/GridContext";

// Import React
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";

//Images
import Trash from "../../assets/trash.png";

const ItemsSelected = ({ selected }) => {
  const { removeSelectedCard } = useContext(GridContext);

  return (
    <C.ItemsSelected>
      <C.ItemLeftDesc>
        <C.ItemImage src={selected.image} alt={"Lixo"} />
        <C.ItemText>
          <C.ItemName>{selected.name}</C.ItemName>
          <C.ItemDescription>{selected.description}</C.ItemDescription>
        </C.ItemText>
      </C.ItemLeftDesc>
      <C.ItemRightDesc>
        <C.ItemValue>{selected.value}</C.ItemValue>
        <C.ItemDelete onClick={() => removeSelectedCard(selected.id)}>
          <C.ItemDeleteImage src={Trash} alt={"Trash"} />
        </C.ItemDelete>
      </C.ItemRightDesc>
    </C.ItemsSelected>
  );
};

export default ItemsSelected;
