import React from 'react';
import ReactDOM from 'react-dom';

export default function Home(){
  
  const cssDiv ={
    background:'linear-gradient(to top, #30cfd0 0%, #330867 100%)',
    height:'100vh',
    width:'100vw'
  }
  
  
  const cssMain ={
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%,-30%)',
    textAlign: 'center',
    color:'#fff'

  }
  
  const cssSpan={
    color:'#00ffff',
    fontWeight:'bold'
  }
  
  const cssP={
    fontSize:'24px',
    margin:'10px 0'
  }
  
  
  const cssIcon={
    color:'#fff',
    fontSize:40
  }
  
  return(
    <div style={cssDiv}>
    <main style={cssMain}>
      <h1>Bem-vindo ao <span style={cssSpan}>Fullstack Veículos.</span></h1>
      <p style={cssP}>Em nossa página você poderá buscar veículos, adicionar e fazer uma listagem de veículos que lhe interesse.</p>
      <i className="fa fa-car" aria-hidden="true" style={cssIcon}></i>
    
    </main>
    </div>
  )
}
