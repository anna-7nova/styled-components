import React from 'react';
import styled from 'styled-components';
import image from './img/Rectangle 1.png';

function App() {
  return (
    <div>
      <StyledBox>
        <img src={image}/>
        <StyledH>Headline</StyledH>
        <StyledP>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</StyledP>
        <SmallBox>
          <SuperButton>See more</SuperButton>
          <SecondButton>Save</SecondButton>
        </SmallBox>
      </StyledBox>
    </div>
  );
}

export default App;

const StyledBox = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
background-color: FFFFFF;
border-radius: 15px;
box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
width: 300px;
height: 350px;
padding: 10px;
`
const Image = styled.div`
  background: url(${image});
`

const StyledH = styled.h2`
color: #000;
font-weight: bold;
font-size: 18px;
margin: 10px;
`
const StyledP = styled.p`
color: #abb3ba;
font-family: sans-serif;
font-size: 14px;
margin: 10px;
`

const SmallBox = styled.div`
margin: 10px;
display: flex;
gap: 12px;
`

const SuperButton = styled.button`
color: #fff;
background-color: #4e71fe;
width: 86px;
height: 30px;
border: 2px solid #4e71fe;
border-radius: 5px;
font-size: 10px;
font-weight: bold;

:hover {
color: #4e71fe;
background-color: transparent;
}
`
const SecondButton = styled(SuperButton)`
color: #4e71fe;
background-color: transparent;
`