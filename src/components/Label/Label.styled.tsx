import styled from 'styled-components';

export const StyledLabel = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
background-color: #FFFFFF;
border-radius: 15px;
box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
width: 300px;
height: 350px;
padding: 10px;

h2 {
color: #000;
font-weight: bold;
font-size: 18px;
margin: 10px;
}

p{
color: #abb3ba;
font-size: 14px;
margin: 10px;
}
`

export const SmallBox = styled.div`
margin: 10px;
display: flex;
gap: 12px;
`


export const SuperButton = styled.button`
color: #fff;
background-color: ${props => props.color || '#4e71fe'};
width: 86px;
height: 30px;
border: 2px solid ${props => props.color || '#4e71fe'};
border-radius: 5px;
font-size: 10px;
font-weight: bold;
cursor: pointer;

&:hover {
background-color: #FAC172;
border: 2px solid #FAC172;
}
`
export const SecondButton = styled(SuperButton)`
color: #4e71fe;
background-color: transparent;

&:hover {
color: #FAC172;
background-color: transparent;
}
`