import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">
      <section className='profile'>
      
     
    <h1>Hi, I am Biswajit Parida</h1>

    <h1>-   I'm a full stack devloper with strong problem-solving
       skills,specializing in  building features </h1>
       <hr/>
       
       <a href='mailto:paridabiswa2k@gmail.com'> Email me</a>
       
       
    </section>
    <div className="social">
      <h1>Find me on- </h1>
    <a href='https://leetcode.com/u/_Biswajit091_/'>
    <img width="48" height="48" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo.png" alt="external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo"/>
    </a>

  <a href='https://www.linkedin.com/in/biswajit-parida-56501a186/'>
  <img width="48" height="48" src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin"/>
  </a>

  <a href='https://x.com/Biswaji22176021'>
  <img width="48" height="48" src="https://img.icons8.com/fluency/48/twitterx--v1.png" alt="twitterx--v1"/>
  </a>
  <a href='https://github.com/paridaq'>
  <img width="48" height="48" src="https://img.icons8.com/fluency/48/github.png" alt="github"/>
  </a>
    </div>
    <hr/>
    <div className="project">
      <h2>Projects</h2>
      
      <h3>E-commerce</h3>
      <p> E-commerce application using MERN  stack , with React.js for frontend and Node.js with Express.js for the backend. For state management on the frontend utilized Context API. All CRUD operation for data fetching. Used Axios for making http request. CORS ensuring seamless API communications
        <a href='https://github.com/paridaq/e-commerce-app-1.git'>Source code</a>
      </p>
      <h3>Authentication system </h3>
      <p> I developed an authentication system using React Context API for smooth data flow. The backend is built with Node.js and Express.js employing JWT for secure password hashing and authentication. MongoDB is used for store users details.
        <a href=' https://github.com/paridaq/auth-backend-mern.git'>Source code</a>
      </p>
      <h3>Dashboard</h3>
      <p>I built a dashboard using  React.js with exceptional design. Integrating external API for dynamic content .The dashboard is highly proficient and adjusts to product availability.
        <a href='https://github.com/paridaq/Dashboard-Biswajit.git'>Source code</a>
      </p>
      <span> and many more to come.....</span>

      <h5>Languages-    Javascript,C++,Java,Typescript</h5>
      <h5>Technologies-React.js,Express.js,Node.js</h5>
      <h5>Tools-Git,GitHub</h5>

    </div>
    
    
    </div>
    </>
  )
}

export default App
