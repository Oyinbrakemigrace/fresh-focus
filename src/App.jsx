import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {

  return (
    <div>
      <Header />
      <div className="lg:px-12 px-3">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
