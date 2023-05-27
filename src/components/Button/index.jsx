import React from "react";

// import Styles
import * as C from "./styles";

// import Assets
import trash from "../../assets/trash.png";

const Button = ({ title }) => {
  return (
    <C.Button>
      <img src={trash} alt="" />
      {title}
    </C.Button>
  );
};

export default Button;
