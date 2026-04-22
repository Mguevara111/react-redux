import { Route,Routes } from 'react-router-dom'
import { Dashboard } from './components/dashboard'
import { Layout } from './components/layout'
import { Login } from './components/login'
import { E404 } from './components/e404'
import { Singletask } from './components/singletask'
import { Message } from './components/message'
import { setMessage } from './app/conterslice'
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from 'react-redux'
import { Stats } from './components/stats'
import { useStats } from './hooks/useStats'

import './App.css'

function App() {
  let messagein=useSelector((state)=>state.generalState.message)
  let dispatch=useDispatch();

  //console.log('values',values)

    useEffect(()=>{
      let tu= setTimeout(()=>{
            dispatch(setMessage({
                message:'',
                color:''
            }))
        },4000)

        return ()=>clearTimeout(tu)
    },[messagein.message])

    
  useStats()    //aqui se calcula las stats del customhook
   

  return (
    <>
    <Message></Message>
    <Routes>
      <Route path='/' element={<Layout></Layout>} >
        <Route index element={<Dashboard></Dashboard>}></Route>
        <Route path='/task' element={<Singletask></Singletask>}></Route>
      </Route>
      <Route path='login' element={<Login></Login>}></Route>
      <Route path='stats' element={<Stats></Stats>}></Route>
      <Route path='*' element={<E404></E404>}></Route>
    </Routes>
    </>
  )
}

export default App
