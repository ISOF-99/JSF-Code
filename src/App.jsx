import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './views/Home'
import Contacts from './views/ContactUs'
import NotFound from './views/NotFound'




function App() {
   return (
    
    
    <BrowserRouter>
       
      <Routes>
        <Route path= "/" element={<Home/>} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
        
      </Routes>
     
  </BrowserRouter>
  
   )
}

export default App

