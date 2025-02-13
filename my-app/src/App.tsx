import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Introduction from './about/Introduction'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Introduction/>
    </>
  )
}

export default App
