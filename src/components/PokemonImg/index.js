import React, { useState, useEffect} from 'react';

import api from '../../Services/api';

import { Container } from './styles';

function PokemonImg(link) {
  const [img, setImg] = useState({  sprites: [] });

   useEffect(() => {
    const fetchImg = async () => {
      const respImg = await api.get(link.link);
      setImg(respImg.data);  
      }
      fetchImg();
    }, []);

  return (
    <Container>
        <img src={img.sprites.back_default} />
        <img src={img.sprites.front_default} />
        <img src={img.sprites.front_shiny} />
    </Container>
  );
}

export default PokemonImg;