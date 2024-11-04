import React from 'react';
import styled from 'styled-components';
import { Label } from "./components/Label/Label";

function App() {
  return (
    <MainDiv>
      <Label color={"red"} />
      <Label />
      <Label color={"green"}/>
    </MainDiv>
  );
}

export default App;

const MainDiv = styled.div`
height: 100vh;
display: flex;
justify-content: space-around;
align-items: center;
gap: 10px;

@media screen and (max-width: 1280px) {
flex-flow: row wrap;
}
`


