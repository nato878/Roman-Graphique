
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Defred  from './composants/Defred/Defred'
import './App.css'
import Accueil from './composants/Accueil/Accueil'
import Header from './composants/Header/Header'
import Footer from './composants/Footer/Footer'


function App() {
  

  return (
    <>
    <BrowserRouter>
       <Header/>
    <Routes>
   
      <Route path='/' element ={<Accueil/>}/>
      <Route path='/Defred' element = {<Defred/>} />
    </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
