import styled from 'styled-components';
import { variables } from '../../styles/variables';

export const HeaderStyle = styled.header`
color: ${variables.colors.grayishBlue};
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
height: 150px;
margin: 3rem auto;
  .switcher{
    display: flex;
    align-items: center;
    font-weight: ${variables.fontweights.bold};
    color: ${variables.colors.lightGrayishBlue};
  }
`

export const SwitchContainer = styled.div`
height: 30px;
width: 55px;
background: ${variables.colors.linearGradient};
border-radius: 20px;
position: relative;
margin: 0 1rem;
&:hover{
  background: ${variables.colors.lightPurple};
}
button{
  position: absolute;
  background-color: ${variables.colors.white};
  height: 20px;
  width: 20px;
  border-radius: 50%;
  top: 5px;
  left: 5px;
  border: none;
  cursor: pointer;
  transition: 0.5s;
}
`