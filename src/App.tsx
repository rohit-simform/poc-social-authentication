
import './App.css'
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import Login from './pages/login'
import Profile from './pages/profile'

function App() {

  return (
    <div>
       <BrowserRouter>
          <Routes>
             <Route path="/login" element={<Login/>} />
             <Route path="/" element={<Profile/>} />
          </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App
