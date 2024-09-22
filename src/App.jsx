import React from 'react'
// import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import Main from './components/Main/Main'

function App() {
 

  return (
    <>
      <div className='flex'>
        <Sidebar />
        <Main/>
      </div>
    </>
  )
}

export default App
