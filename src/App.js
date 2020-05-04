import React, { useState } from 'react';
import Frase from './components/Frase'
import styled from '@emotion/styled';

const Contenedor = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  padding:5rem;

`
const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size:300px;
  font-family:Arial, Helvetica, sans-serif;
  color:#fff;
  margin-top:1rem;
  padding:1rem 3rem;
  font-size:2rem;
  border:2px solid black;
  margin-top:10rem;
`


function App() {

  //state de frases
  const [frase, setFrase] = useState({})

  /*const consultarAPI = () => {
    const api = fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = api.then(respuesta => respuesta.json());
    frase.then(resultado => console.log(resultado));
  };*/

  const consultarAPI = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await api.json();
    setFrase(frase[0]);
  };

  //useeffect para cargar una frase de menera automática

  return (
    <Contenedor>
      <Frase
        frase={frase}
      />
      <Boton
        onClick={() => consultarAPI()}
      >
        Obtener frase
      </Boton>

    </Contenedor>
  );

}


export default App;
