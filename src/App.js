import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './Components/Header'
import Home from './Pages/Home'
import Members from './Pages/Members'
import Footer from './Components/Footer'
import Memberships from './Pages/Members'

function App(){
  return(
    <div className='app'>
      <Router>
        <Header/>
        <div className='pages'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/members' element={<Members/>}/>
            <Route path="/memberships" element={<Memberships/>} />
          </Routes>
        </div>
      </Router>
      <Footer/>
    </div>
  )
}
export default App;