import React from "react";
import ListContainer from "./container/ListContainer";
import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
html{
  background: #102027;
}
`;

function App() {
  return (
    <div>
      <Global />
      <ListContainer></ListContainer>
    </div>
  );
}

export default App;
