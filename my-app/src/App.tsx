import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Introduction from './about/Introduction'
import UsedTools from './about/UsedTools'
import Project from './Project/Projects'
import SocialMedia from './socials/SocialMedia'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Introduction/>
      
      <UsedTools/>
      <Project/>
      <SocialMedia/>
      <Footer/>
    </>
  )
}

export default App
