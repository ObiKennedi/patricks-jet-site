import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './Components/Header'
import Home from './Pages/Home'

function App(){
  return(
    <div className='app'>
      <Router>
        <Header/>
        <div className='pages'>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  )
}
export default App;