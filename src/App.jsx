import './App.css'
import Card from './componente/Card'
import coches from './data/coches'

function App() {
  const cocheslist = coches.map((e) =>{
    return <Card image = {e.imagen} nombre={e.nombre} precio={e.precio} description={e.descripcion}   />
  }
)

  return (
    <div className='content-app'>
      <h1>Tarea #1  </h1>
      <div className='content-list'> 
        {cocheslist}
      </div>
    </div> 
)
}

export default App
