import React,{useState, useEffect} from 'react';
import ModalEdit from './ModalEdit'


export default function Detalhes(props){
  
  const [openModal, setOpenModal]= useState(false)
  

  //css
  const cssContainer = {
    background:'#e9e9e9',
    padding:'10px'
  }
  
  const cssVeiculo ={
    fontSize:'22px',
    padding:'10px',
  }
  
  const cssMarcaAno = {
    display:'flex',
    marginLeft:'10px',
    alignItems: 'center',
  }
  
  const cssDesc ={
    padding:'10px',
  }
  
  const cssButton = {
    justifyContent:'space-between',
    alignItems: 'center',
    display:'flex',
    padding:'20px'
  }
  
  const cssAno ={
    marginLeft:'30px'
  }
 
  const cssBtnEdit={
    background: '#084d6e',
    color: '#fff',
    padding: '10px',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
    display: 'inline-block',
    marginLeft: '5px',
    width: '150px',
  }
  
  return(
    <div style={cssContainer}>
    
      <div>
        <p className='detalhe-title text-success' style={cssVeiculo}>{props.veiculo}</p>
      </div>
      
      <div className='detalhe-ma justify-content-start' style={cssMarcaAno}>
        <p><span className='fw-bold'>Marca:</span> <br/><p className='text-muted'>{props.marca}</p></p>
        <p style={cssAno}><span className='fw-bold'>Ano:</span><br/><p className='text-muted' >{props.ano}</p></p>
      </div>
      
      <div className='detalhe-descricao' style={cssDesc}>
        <p><span className='fw-bold'>Descrição:</span><br/>{props.descricao}</p>
      </div>
      
      <div style={cssButton}>
        <button 
        style={cssBtnEdit}
        onClick={()=>{setOpenModal(true)}}
        >Editar</button>
        <i class=" fa fa-tag" aria-hidden="true"></i>
        
        {openModal && <ModalEdit closeModal={setOpenModal} />}
      </div>
    </div>
    
  )
}
