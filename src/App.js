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

const Home = () => <div>React Intro</div>

export default App
