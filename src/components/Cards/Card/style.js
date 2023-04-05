import styled from 'styled-components';
import { variables } from '../../../styles/variables';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  row-gap: 2rem;

  @media screen and (min-width: 1000px){
    flex-direction: row;
    align-items: center;
  }
`

export const CardStyle = styled.div`
padding: 2rem;
  border-radius: 10px;
  width: 340px;
  margin: 0 auto;
  text-align: center;
  color: ${variables.colors.darkGrayishBlue};
  font-size: 93.75%;
  background-color: ${variables.colors.white};

  h2{
    font-size: 1rem;
  }

  h3{
    font-size: 4.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1.5rem auto;

    span{
      font-size: 2.5rem;
    }
  }
  ul{
    font-weight: ${variables.fontweights.bolder};
    li{
      border-top: 1px solid ${variables.colors.lightGrayishBlue};
      padding: 1rem 0;
      &:nth-child(3){
        border-bottom: 1px solid ${variables.colors.lightGrayishBlue};
      }
    }
  }

  button{
    text-transform: uppercase;
    color: white;
    border: 1px solid transparent;
    background: ${variables.colors.linearGradient};
    padding: 0.75rem 0;
    width: 100%;
    border-radius: 5px;
    font-family: 'Montserrat', sans-serif;
    font-weight: ${variables.fontweights.bolder};
    letter-spacing: 0.15rem;
    margin-top: 2rem;
    &:hover{
      cursor: pointer;
      background: transparent;
      border: 1px solid ${variables.colors.purple};
      color: ${variables.colors.purple};
    }
  }
  &:nth-child(2){
   background: linear-gradient(145deg, hsl(236, 72%, 79%), hsl(237, 63%, 64%));
   color: ${variables.colors.white};
   button{
    background: ${variables.colors.white};
    color: ${variables.colors.purple};
    &:hover{
      border: 1px solid ${variables.colors.white};
      color: ${variables.colors.white};
      background: transparent;
    }
   }
  }
  @media screen and (min-width: 1000px){
    &:nth-child(2){
      padding: 3.5rem 2rem;
      button{
        width: 276px;
      }
    }
  }
`