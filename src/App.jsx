//import React from 'react'
import HomePage from "../src/Pages/HomePage"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import BestSeller from './Pages/BestSeller'
import FreshArrivals from './Pages/FreshArrivals'
import LoginPage from './Pages/LoginPage'
import SearchPage from './Pages/SearchPage'
import NavBar from "./components/NavBar"
import SignupPage from "./Pages/SignupPage"
import Glasses from "./Pages/Glasses"
import Furniture from "./Pages/Furniture"
import DecorItem from "./Pages/DecorItem"
import Accessories from "./Pages/Accessories"
import "./App.css"
const App = () => {
  return (
    <div style={{ backgroundColor:'whitesmoke', // Replace with your desired color
      minHeight: '100vh', // Ensures full height coverage
      minWidth: '100vw', // Ensures full width coverage
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      overflowX: 'hidden',}}>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element = {<HomePage/>}></Route>
        <Route path= "Bestseller" element = {<BestSeller/>}></Route>
        <Route path= "fresharrivals" element = {<FreshArrivals/>}></Route>
        <Route path= "glasses" element = {<Glasses/>}></Route>
        <Route path= "furniture" element = {<Furniture/>}></Route>
        <Route path= "decor" element = {<DecorItem/>}></Route>
        <Route path= "accessories" element = {<Accessories/>}></Route>
        <Route path= "login" element = {<LoginPage/>}></Route>
        <Route path= "register" element = {<SignupPage/>}></Route>
        <Route path= "search" element={<SearchPage />} />
      </Routes>
      
      </BrowserRouter>
    
      </div>
  )
}

export default App