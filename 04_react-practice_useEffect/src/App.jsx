import './App.css'

import { Input } from "./components/Input.jsx"
import { Counter } from './components/Counter.jsx'
import { Fetching } from './components/Fetching.jsx'

function App() {

  return (
    <>
      <Input />
      <Counter />
      <Fetching />
    </>
  )
}

export default App
