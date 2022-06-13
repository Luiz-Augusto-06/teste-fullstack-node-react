
import React,{useState,useEffect} from 'react'
import Axios from 'axios'


export default function ModalEdit({ closeModal }, props) {


const [editValues, setEditValues] = useState({
    id: props.id,
    veiculo: props.veiculo,
    marca: props.marca,
    ano: props.ano,
    vendido: props.vendido,
    descricao: props.descricao
  })
  
 //pegar os valores do input
  const handleEditValues = (values) => {
    setEditValues((prevValues) => ({
      ...prevValues,
      [values.target.id]: values.target.value,
    }));
  };
  
//editar
const handleEdit = () => {
    Axios.put("http://localhost:8000/edit", {
      id: editValues.id,
      veiculo: editValues.veiculo,
      marca: editValues.marca,
      ano: editValues.ano,
      vendido: editValues.vendido,
      descricao: editValues.descricao,
    }).then(() => {
      props.setList(
        props.list.map((value) => {
          return value.id == editValues.id ?
            {
              id: editValues.id,
              veiculo: editValues.veiculo,
              marca: editValues.marca,
              ano: editValues.ano,
              vendido: editValues.vendido,
              descricao: editValues.descricao
            } :
            value;
        })
      );
    });
    closeModal();
  };


//css
  const cssModalBackground = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    backdropFilter: 'blur(10px)',
    transform: 'translate(-50%,-50%)',
    
  }

  const cssModalContainer = {
    width: '800px',
    height: '700px',
    borderRadius: '12px',
    background: '#d3d3d3',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px'

  }

  const cssModalTitle = {
    display: 'inline-block',
    textAlign: 'start',
    marginTop: '10px',
  }

  const cssBtnCloser = {
    color: '#000',
    display: 'flex',
    justifyContent: 'flex-end',
    background: 'transparent',
    border: 'none',
    fontSize: '25px',
    cursor: 'pointer'

  }

  const cssModalFooter = {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    height: '600px'
  }

  const cssBtn = {
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

  const cssModalInput = {
    background: 'transparent',
    borderBottom: '2px solid #222',

  }

  const cssModalInputDesc = {
    background: 'transparent',
    borderBottom: '2px solid #222',
    height: '200px'
  }


  return (
    <div className='modalBackground' style={cssModalBackground}>
      <div className='modalContainer ' style={cssModalContainer}>
        <button style={cssBtnCloser} onClick={()=>closeModal(false)}><i class="fa fa-times" aria-hidden="true"></i></button>
        
        <div className='modalTitle' style={cssModalTitle}>
          <h1>Novo Veículo</h1>
        </div>
        
        <div>
        <form className='modalBody row'>
          <div className='col-6 form-floating mt-2 mb-4'>
          
            <input 
              type='text' 
              name='veiculo' className="form-control w-75"
              id="veículo"
              defaultValue={props.veiculo}
              style={cssModalInput}
             onChange={handleEditValues}/> 
            <label for="veiculo" className=''>Veículo</label>
          </div>
          
          <div className='col-6 form-floating mt-2 mb-4'>
            <input 
            type='text' 
            name='marca' 
            className="form-control w-75" 
            id="marca"
            defaultValue={props.marca}
            style={cssModalInput}
            onChange={handleEditValues}
            /> 
            <label for="Marca"> Marca</label>
          </div>
          
          <div className='col-6 form-floating mt-2 mb-4'>
            <input 
            type='number' 
            name='ano' 
            className="form-control w-25 " 
            id="ano"
           defaultValue={props.ano}
            style={cssModalInput}
            onChange={handleEditValues}/> 
            <label for="ano">Ano</label>
          </div>
                    
          <div className="col-6 form-check d-flex align-items-center form-switch mt-2 mb-4">
            <input 
            className="form-check-input " 
            type="checkbox" 
            id="vendido"
            defaultValue={props.vendido}
            name="vendido"
            onChange={handleEditValues}/>
            <label class="form-check-label p-1" for="vendido"> Vendido</label>
          </div>
          
          <div className='col-12 form-floating mt-2 mb-4'>
            <textarea 
            type='text' 
            name='descricao' 
            className="form-control "
            id="descricao"
            defaultValue={props.descricao}
            style={cssModalInputDesc}
            onChange={handleEditValues}
            ></textarea>
            <label for="descricao"> Descrição</label>
          </div>
         </form>
        </div>
        
        <div className='modalFooter' style={cssModalFooter} >
          <button style={cssBtn} onClick={()=>closeModal(false)}>Fechar</button>
          <button 
          onClick={()=> handleEdit()} 
          style={cssBtn}>Salvar
          </button> 
        </div>
        
      </div>
    </div>
  )

}

