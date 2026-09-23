import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {
  const [theme, setTheme] = useState('Dark')
  return (
    <div>
      <Navbar theme={theme} />
    </div>
  )
}
export default App
