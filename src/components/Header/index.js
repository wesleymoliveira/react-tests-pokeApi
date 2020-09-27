import React from 'react';

import { Container, Content} from './styles';

function Header() {
  return (
    <Container>
    <Content>
        <h1> Wesley</h1>
        <img src={'https://api.adorable.io/avatars/50/abott@adorable.png'} alt="GoBarber"/>
    
    </Content>
  </Container>
  );
}

export default Header;