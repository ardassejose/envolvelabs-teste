import React from "react";

// import Styles
import Header from "./components/Header";
import { Global } from "./styles/Global";
import * as C from "./AppStyles";

// import Components
import GridStep1 from "./components/GridStep1";
import GridStep2 from "./components/GridStep2";
import GridStep3 from "./components/GridStep3";
import Footer from "./components/Footer";

// import context
import { GridProvider } from "./context/GridContext";

const App = () => {
  return (
    <>
      <GridProvider>
        <C.Content>
          {/* header */}
          <Header />

          {/* main */}
          <C.Main>
            <GridStep1 />
            <C.GridColumn>
              <GridStep2 />
              <GridStep3 />
            </C.GridColumn>
          </C.Main>

          {/* footer */}
          <Footer
            title={"Página teste Envolve - Todos os Direitos Resevados "}
          />
        </C.Content>
      </GridProvider>

      <Global />
    </>
  );
};

export default App;
