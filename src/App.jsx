import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Dashboard from './components/Dashboard'
import Posts from './pages/Posts'
import { useContext, useRef } from 'react'
import { ThemeContext } from './context/ThemeContext'

const App = () => {
  const context = useContext(ThemeContext)
  const someRef = useRef()

  return (
    <div ref={someRef} className={ context.theme }>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Layout/> }>
            <Route index element={ <Dashboard/> }/>
            <Route path="/posts" element={ <Posts /> }/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
