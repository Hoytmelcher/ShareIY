import { useState } from 'react'
import './App.css'
import NavComponent from './components/nav'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import ProjectForm from './components/ProjectForm'
import CreatePost from './views/CreatePost'
import Home from './views/Home'
import Profile from './views/Profile'
import PostSingle from './views/PostSingle'


function App() {

  
  return(
    <NavComponent />
  )
}

export default App
