import { useState } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [dados, setDados] = useState([]);

  async function pegarDados(){
    const res = await fetch('http://localhost:3000/api/hello')
    const dados = await res.json()
    dados.data.forEach(element => {
      console.log(element.basica)
      setDados(old => [...old, element.basica])
    }

    ) 
    console.log(dados)
  }
  
  return (
    <>
      <button onClick={pegarDados}>Pegar Dados</button>
      {dados.map(element => (
        <p>{element}</p>
      )
      )}
    </>        
  )
}
