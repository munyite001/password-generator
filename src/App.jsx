import { useState } from "react"
import './App.css'
import Display from './components/Display'
import Generator from "./components/Generator"

export default function App() {

  const [passWord, setPassword] = useState("")
  const [charLength, setCharLength] = useState(0)
  const [useUpperCase, setUseUpperCase] = useState(false)
  const [useLowerCase, setUseLowerCase] = useState(false)
  const [useNumbers, setUseNumbers] = useState(false)
  const [useSpecial, setUseSpecial] = useState(false)
  const [copy, setCopy] = useState(false)
  return (
  <div className="app">
    <h2>Password Generator</h2>
    <Display passWord={passWord} copy={copy} setCopy={setCopy}/>
    <Generator 
      charLength={charLength} 
      setCharLength={setCharLength}
      useUpperCase={useUpperCase}
      setUseUpperCase={setUseUpperCase}
      useLowerCase={useLowerCase}
      setUseLowerCase={setUseLowerCase}
      useNumbers={useNumbers}
      setUseNumbers={setUseNumbers}
      useSpecial={useSpecial}
      setUseSpecial={setUseSpecial}
      setPassword={setPassword}
      />
  </div>
  )
}