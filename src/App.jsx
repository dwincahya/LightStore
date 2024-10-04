import { useState } from 'react'
import Home from './pages/home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <Home />
    </div>
  )
}

export default App
