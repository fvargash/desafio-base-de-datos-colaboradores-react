import { useState } from 'react';
import { BaseColaboradores } from './BaseColaboradores';

function App() {
  const [nuevoColaborador, setNuevoColaborador] = useState({nombre:"", correo:""})

  const [listaColaboradores,setListaColaboradores] = useState(BaseColaboradores)

  const [buscadorColaboradores,setBuscadorColaboradores] = useState("") 

  const handleChange = (e,prop) =>{
    setNuevoColaborador({...nuevoColaborador,[prop]: e.target.value })
    console.log(nuevoColaborador)
  }

  const handleClick = () => {
    setListaColaboradores([...listaColaboradores,{...nuevoColaborador,id:Date.now()}])
  }  

  const handleSearch = (ev) => {
    setBuscadorColaboradores(ev.target.value)
  }

  return (
    <div className="App">
      <div className='navbar'>
        <h1 className='buscador'>Buscador de Colaboradores:</h1>
        <input className='input-buscador' placeholder='Buscar un colaborador' type="text" onChange={handleSearch}/>
      </div>
      <div className='nombre-colaborador'>
        <label className='label-nombre'>Nombre Colaborador :</label>
        <input className='input-nombre' placeholder='Ingresa el nombre del colaborador' type="text" onChange={(ev) => {
          handleChange(ev,"nombre")
        }}/>
      </div>
      <div className='correo-colaborador'>
        <label className='label-correo'>Correo Colaborador :</label>
        <input className='input-correo' placeholder='Ingresa el correo del colaborador' type="text" onChange={(ev) => {
          handleChange(ev,"correo")
        }}/>
      </div>
        <button className='button' type="submit" onClick={handleClick}>Agregar</button> 
        <h1 className='titulo-listado'>Listado de colaboradores :</h1>
      <div className='listado-colaboradores'>
        <ul>
          {listaColaboradores.filter((colaborador) => {
            return(
            colaborador.nombre.toLowerCase().includes(buscadorColaboradores.toLowerCase()))
          }).map(colaborador => {
            return (
              <li key={colaborador.id}>
                {colaborador.nombre} - {colaborador.correo}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
