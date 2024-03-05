import { useState } from "react"
import './App.css'
import Display from './components/Display'
import Generator from "./components/Generator"

export default function App() {

  const [passWord, setPassword] = useState("")
  const [charLength, setCharLength] = useState(0)
  return (
  <div className="app">
    <h2>Password Generator</h2>
    <Display passWord={passWord}/>
    <Generator charLength={charLength} setCharLength={setCharLength}/>
  </div>
  )
}