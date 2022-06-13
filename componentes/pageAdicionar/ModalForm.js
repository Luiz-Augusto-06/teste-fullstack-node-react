import React,{useState,useEffect} from 'react'
import Axios from 'axios'


export default function ModalForm({ closeModal }) {

const [values, setValues] = useState();
const [list, setList] = useState([]);
  
 useEffect(()=> {
     Axios.get('http://localhost:8000/listar')
     .then((response)=> {
        setList(response.data);
     });
  },[]);
  

//setar os valures
const handleAddValues = (value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [value.target.name]: value.target.value,
    }));
  };

  
//cadastrar no bd
const handleCadastrar = () => {
  Axios.post('http://localhost:8000/adicionar',{
    veiculo: values.veiculo,
    marca: values.marca,
    ano: values.ano,
    vendido: values.vendido,
    descricao: values.descricao
  }).then(() => {
    Axios.post("http://localhost:8000/adicionar", {
      veiculo: values.veiculo,
        marca: values.marca,
        ano: values.ano,
        vendido: values.vendido,
        descricao: values.descricao,
    }).then((response) => {
      setList([
            ...list,
        {
          id: response.data[0].id,
          veiculo: values.veiculo,
            marca: values.marca,
            ano: values.ano,
            vendido: values.vendido,
            descricao: values.descricao,
            },
          ]);
    });
  });
 };




//css
  const cssModalBackground = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:'20px'
    
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
              placeholder="Digite o veículo" 
              id="veículo" 
              style={cssModalInput}
              onChange={handleAddValues}
              /> 
            <label for="veiculo" className=''>Veículo</label>
          </div>
          
          <div className='col-6 form-floating mt-2 mb-4'>
            <input 
            type='text' 
            name='marca' 
            className="form-control w-75" 
            placeholder="Digite a marca"
            id="veículo" 
            style={cssModalInput}
            onChange={handleAddValues}
            /> 
            <label for="Marca"> Marca</label>
          </div>
          
          <div className='col-6 form-floating mt-2 mb-4'>
            <input 
            type='number' 
            name='ano' 
            className="form-control w-25 " 
            placeholder="Ano" 
            id="ano" 
            style={cssModalInput}
            onChange={handleAddValues}/> 
            <label for="ano">Ano</label>
          </div>
                    
          <div className="col-6 form-check d-flex align-items-center form-switch mt-2 mb-4">
            <input 
            className="form-check-input " 
            type="checkbox" 
            id="vendido"
            name="vendido"
            onChange={handleAddValues}
            />
            <label class="form-check-label p-1" for="vendido"> Vendido</label>
          </div>
          
          <div className='col-12 form-floating mt-2 mb-4'>
            <textarea 
            type='text' 
            name='descricao' 
            className="form-control "
            placeholder="Descrição"
            id="descricao"
            onChange={handleAddValues}
            style={cssModalInputDesc}></textarea>
            <label for="descricao"> Descrição</label>
          </div>
         </form>
        </div>
        
        <div className='modalFooter' style={cssModalFooter} >
          <button style={cssBtn} onClick={()=>closeModal(false)}>Fechar</button>
          <button 
          onClick={()=> handleCadastrar()} 
          style={cssBtn}
          >ADD
          </button> 
        </div>
        
      </div>
    </div>
  )

}

