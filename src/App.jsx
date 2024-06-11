import { useState} from 'react'
import{Route , Routes} from 'react-router-dom'
import { Inicio } from './pagues/inicio/Inicio'
import './App.css'
import Login from './pagues/login/Login'
import { Dasboard } from './pagues/dasboard/dasboard'
import { Proyectos } from './pagues/dasboard/Proyectos'
import { useCookies } from 'react-cookie';
import ConfirmacionCode from './pagues/confirmacionCode/confirmacionCode'
import { DasComplete } from './pagues/dasboard/MenuDash'



function App() {
  
  const [cookies] = useCookies();
  const userCookie = cookies.xt;
  const[estadoGlobal , setEstadoGlobal]= useState(userCookie)
 // const [isLoading, setIsLoading] = useState(flase)

  /*useEffect(()=>{
    setTimeout( ()=>{
    setIsLoading(false)
    },4000)
    //fakeDataFetch()
  },[])*/

  return (
    <Routes>
    <Route path='/' element={ <Inicio/>} /> 
    <Route path='/login' element = { estadoGlobal? <Dasboard   /> :<Login estadoGlobal={estadoGlobal} setEstadoGlobal={setEstadoGlobal}  />} /> 
    <Route path='/proyectos' element={<Proyectos/>} />
    <Route path='/ygduqduygdosi' element={<ConfirmacionCode/>} />
    <Route path='/nuevo' element={<DasComplete/>} />
    
    </Routes>
  )
 
}

export default App
