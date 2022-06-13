//arrumar detalhes
import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import Card from './Card'
import Detalhe from './Detalhe'


export default function List(props) {

  const [list, setList] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:8000/listar')
      .then((response) => {
        setList(response.data);
      });
  }, []);

  //css
  const cssVisible = {
    zIndex: '-2'
  }


  return (
    <div className='container'>
     <div className='row'>
      <div className='col-6 mt-5' style={cssVisible}>
        <div>
        <h4>Lista de veículos adicionados</h4>
        </div>
        
          {list.map((val) => (
        <Card
          list={list}
          setList={setList}
          key={val.id}
          id={val.id}
          veiculo={val.veiculo}
          marca={val.marca}
          ano={val.ano}
        />
      ))}
          
      </div>
           
      <div className='col-6 mt-5'>
      <div>
        <h4>Detalhes</h4>
      </div>
      
       {list.map((val)=> (
        <Detalhe
          list={list}
          setList={setList}
          key={val.id}
          id={val.id}
          veiculo={val.veiculo}
          marca={val.marca}
          ano={val.ano}
          vendido = {val.vendido}
          descricao = {val.descricao}
          />
       ))}
       
      </div>
     </div>
    </div>

  )
}
