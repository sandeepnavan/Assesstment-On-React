import React from 'react'
import MainArea from './components/MainArea'
import MidContent from './components/MidContent'
import Navabar from './components/Navabar'
import "./global.css"

const App = () => {
  return (
    <div>
<Navabar/>
<MidContent/>
<MainArea/>
    </div>
    
  )
}

export default App