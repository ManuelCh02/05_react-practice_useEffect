import './App.css'

import { Input } from "./components/Input.jsx"
import { Counter } from './components/Counter.jsx'
import { Fetching } from './components/Fetching.jsx'
import { LocalStorage } from './components/LocalStorage.jsx'

function App() {

  return (
    <>
      <Input />
      <Counter />
      <Fetching />
      <LocalStorage />
    </>
  )
}

export default App
