//import de arquivos
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//páginas
import Home from './Home'
import Add from './componentes/pageAdicionar/Add'
import List from './componentes/pageListar/List'
import Search from './componentes/pageBuscar/Search'

export default function Header() {

  //css
  const cssFullstack = {
    background: '#5b5b58',
    height: 80
  }

  const cssCol = {
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    marginTop: '20px'

  }

  const cssTitulo = {
    fontSize: '24px',
    paddingLeft: '20px',

  }

  const cssMenu = {
    background: 'transparent',
    border: 'none',
    marginLeft: '10px',
    color: '#fff',
    fontSize: 18
  }

  return (
    <header className=' container-fluid ' style={cssFullstack}>
        <div className='row'>
          <div className='col-4' style={cssCol}>
            <h1 style={cssTitulo}><i class="fa fa-tint" aria-hidden="true"></i> Fullstack</h1>
          </div>
          
          <div className='col-8 d-flex justify-content-end' style={cssCol}>
            <div className="btn-group ">
  <BrowserRouter>
    <Switch>
      <button type="button" style={cssMenu}> 
        <Route path="/" exact component={Home} />
        <i class="fa fa-home" aria-hidden="true"></i> Home
      </button>Add

      <button type="button" style={cssMenu}>
        <Route path="/buscar" component={Search} />
        <i class="fa fa-search" aria-hidden="true"></i> Buscar
      </button>
      
      <button type="button" style={cssMenu}>
        <Route path="/adicionar" component={Add} />
        <i class="fa fa-plus" aria-hidden="true"></i> Adicionar 
      </button>
      
      <button type="button" style={cssMenu} >
        <Route path="/listagem" component={List} />
        <i class="fa fa-list" aria-hidden="true"></i> Listagem
      </button>
    </Switch>    
</BrowserRouter>
               
               
            </div>
          </div>
        </div>
    </header>
  )
}
