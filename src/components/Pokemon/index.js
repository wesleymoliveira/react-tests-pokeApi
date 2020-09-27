import React, { useState, useEffect} from 'react';

import api from '../../Services/api';

import { MdChevronLeft,MdChevronRight } from 'react-icons/md';

import { Container, PokemonList } from './styles';

import PokemonImg from '../PokemonImg';


function Pokemon() {

 const [url, setURL] = useState([]);
 const [data, setData] = useState({ results: []});

 const [next, setNext] = useState({ next: []});
 const [prev, setPrev] = useState({ previous: []});


  useEffect(() => {

    const fetchData = async () => {
      const result = await api.get(`${url}`);
  
      setData(result.data);
      setNext(result.data.next);
      setPrev(result.data.previous);
      
    };

    fetchData();
  }, [url]);

    function handlePrevClick(){
      const newURL = prev;
      setURL(newURL);
    }

    function handleNextClick(){
      const newURL = next;
      setURL(newURL);
    }

  return (
    <Container>
    <header>
        <button type="button" onClick={()=> handlePrevClick()} >
        <MdChevronLeft size={36} color ='#FFF'  />
        </button>
        <strong>POKEMONS</strong>
        <button type="button" onClick={()=> handleNextClick()}>
        <MdChevronRight size={36} color ='#FFF' />
        </button>
    </header>
    
    <PokemonList>
      
      {data.results.map(item => (
        <li key={item.name}>
          <strong >{item.name}</strong>
          
          
          <PokemonImg link={item.url} />
         
        </li>
      ))}
   
    </PokemonList>
    </Container>
  );
}

export default Pokemon;