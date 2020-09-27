import styled from 'styled-components';
import { darken } from 'polished';


export const Container = styled.div`
  width: 600px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;


  header {
    
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    button {
      border: 0;
      background: none;
    }

    strong {
      color: #fff;
    }
  }
`;

export const PokemonList = styled.ul`
  display: grid;
  grid-template-columns: fit-content;
  grid-gap: 10px;
  padding: 20px;
  justify-content: center;

  
  li {
    display: flex;
    width: 600px;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    max-width: 450px;
    align-items: center;
    

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #7159c1;
      margin-top: 5px;
      text-transform: uppercase;
    }

    &:hover {
        background: ${darken(0.1, '#7159c1')};

      }

  }
`;