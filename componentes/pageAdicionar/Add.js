

import React,{useEffetc,useState} from 'react';
import ReactDOM from 'react-dom';
import ModalForm from './ModalForm'

export default function Add(){
  
  const [openModal, setOpenModal] = useState(false);
  
 //css
  const cssAll ={
    marginTop:'40px',
  }
  
  const cssAdd = {
    display: 'flex',
    position:'relative',
    justifyContent: 'space-between',
    alignItems:'center',
    borderBottom:'2px solid #000'
  }
  
  const cssButton={
    background:'#fff',
    border:'none',
    
  }

  return(
    <div className='container'>
      <div className='row' style={cssAll}>
        <div className='col-12' style={cssAdd}>
          <h3>Veículo</h3><button style={cssButton} onClick={()=>{setOpenModal(true)}}><i class="fa fa-plus-circle" aria-hidden="true"></i></button>
          
        </div> 
        {openModal && <ModalForm closeModal={setOpenModal} />}
        
      </div>
    </div>
    
  )
  
  
}
