import { useState } from 'react'
import { useEffect } from 'react'

import './App.css'
import PetAdoptionForm from './components/PetAdoptionForm'
import PetAdoptionTable from './components/PetAdoptionTable'

function App() {
  const [formPage, setFormPage] = useState(true)

  const [pets, setPets] = useState([]);

  useEffect(() => {
    
    setFormPage(false)
  
  }, [pets])

  return (
  <>
    <div class="navbar">
      <h1>Pet Adoption </h1>
    </div>
    
    {
      formPage ?
      <PetAdoptionForm pets={pets} setPets={setPets} setFormPage={setFormPage}/>
    :
      <PetAdoptionTable pets={pets} setFormPage={setFormPage}/>
    
    }


  </>
)
}

export default App
