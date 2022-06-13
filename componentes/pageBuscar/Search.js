//mudar o banco de dados
import React,{useState, useEffect} from 'react'
import ReactDOM from 'react-dom';
import Data from "./data"



export default function Search(){
  
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  
  //pegar as letras do input
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    
  //filtrar as letras do input
    const newFilter = Data.filter((value) => {
      return value.veiculo.toLowerCase().includes(searchWord.toLowerCase());
      value.marca.toLowerCase().includes(searchWord.toLowerCase());
      value.vendido.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
 
 //limpar o input
  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
  
  
  //css
 const cssTitle = {
   width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:'120px',
   fontSize:'30px',
   fontWeight:'bold',
   letterSpacing: '2px'
 }


  const cssSearchInputs= {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
}

const csssInput = {
  backgroundColor: '#fff',
  borderRadius: '8px',
  fontSize: '18px',
  padding: '15px',
  height: '50px',
  width: '500px'
}

const cssSearchIcon = {
  height: '60px',
  width: '50px',
  background:'tranparent',
  display: 'grid',
  placeItems: 'center',
  marginLeft:'450px',
  position:'absolute'
}

const cssDataResult = {
  marginTop: '5px',
  height: '500px',
  background: '#e9e9e9',
  overflow: 'hidden',
  overflowY:'auto',
  borderRadius: '2px',
  border:'3px solid #084d6e',
  
}

const cssDataItem ={
  width: '100%',
  height: '100px',
  alignItems: 'center',
  color: '#000',
  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
  marginBottom:'10px',
  background:'#fff',
  marginTop:'15px',
  
}

const cssDataItemP = {
  marginLeft: '10px',
  paddingTop:'10px'
  
}

const cssSpan = {
  fontSize:'18px',
  fontWeight: 'bold'
}


const cssBtn ={
  cursor:'pointer'
}


  return (
    <div className="search"
         >
      <p style={cssTitle}>Pesquisar Veículos <i className=" p-2 fa fa-car" aria-hidden="true"></i></p>
      <div className="searchInputs" style={cssSearchInputs}>

        <input
          type="text"
          
          placeholder="Buscar Veículos..."
          value={wordEntered}
          onChange={handleFilter}
          style={csssInput}
          data={Data}
        /> 
        <div className="searchIcon"
             style={cssSearchIcon}>
          {filteredData.length === 0 ? (
            <i className="fa fa-search" aria-hidden="true" style={cssBtn}></i>
          ) : (
            <i className="fa fa-times" aria-hidden="true" onClick={clearInput} style={cssBtn}></i>
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult container" style={cssDataResult}>
          {filteredData.slice(0).map((value) => {
            return (
              <div className="dataItem "
              style={cssDataItem} >
                <p className="" style={cssDataItemP}><span style={cssSpan}>Veículo: </span>{value.veiculo}<br/>
                   <span style={cssSpan}>Marca: </span>{value.marca}<br/>
                   <span style={cssSpan}>Vendido: </span>{value.vendido ? 'Sim' : 'Não'}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}


