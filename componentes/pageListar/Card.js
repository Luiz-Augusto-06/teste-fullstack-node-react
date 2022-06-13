import React from 'react';
import Axios from 'axios'

export default function Card(props){
  
//funcao de deletar
  const handleDeletar= () => {
    Axios.delete(`http://localhost:8000/delete/${props.editValues.id}`)
    .then(() => {
      props.setList(
        props.list.filter((value) => {
          return value.id != props.editValues.id;
        })
      );
    });
   
  };

//css
  const cssBox ={
   marginLeft :'290px',
   position:'absolute',
   zIndex:'1'
   
 }
 
 const cssLyst ={
   height:'100px',
   background:'#e9e9e9',
   display:'flex',
   flexDirection:'column',
   fontSize:'20px',
   lineHeight: '10px',
   padding:'15px 10px'
 }
 
 const cssVisible = {
   zIndex:'-2'
 }
 
 
 const cssBtnEdit={
    color: '#fff',
    border: 'none',
    padding:'10px',
    cursor: 'pointer',
    position: 'absolute',
    fontSize:'14px',
    marginLeft :'220px',
    width:'90px',
    marginTop:'40px'
    
  }
  
 
  return (
  <div className='d-flex mb-1' style={cssLyst}>
    <div className=''>
      <p className='text-success'>{props.veiculo}</p>
      <p>{props.marca} </p>
      <p>{props.ano}</p>
          
    </div>
      <button style={cssBtnEdit} className=' btn-danger' onClick={()=> handleDeletar()}>Excluir</button>
      <i class=" fa fa-tag" style={cssBox} aria-hidden="true"></i>
 
  </div>
  )
}
