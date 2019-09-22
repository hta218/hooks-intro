import React from "react"
import ExCounter from "./After/UseState"
import Resizer from "./After/UseEffect"
import ThemedCard from "./After/UseContext"
import { Router } from "@reach/router"

function App() {
  
  return <>
    <Router>
      <Home path='/' />
      <ExCounter path='/use-state' />
      <Resizer path='/use-effect' />
      <ThemedCard path='/use-context' />
    </Router>
  </>
}

const Home = () => <div className="text-gray-800 p-10">
  <h1 className="text-4xl">Clean your React Application with Hooks</h1>
  <p>Tuan Anh Huynh - Software Developer @ Bravebits</p>
</div>

export default App
