import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Introduction from './about/Introduction'
import UsedTools from './about/UsedTools'
import Project from './Project/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Introduction/>
      
      <UsedTools/>
      <Project/>
    </>
  )
}

export default App
