import './App.css'

import { Input } from "./components/Input.jsx"
import { Counter } from './components/Counter.jsx'
import { Fetching } from './components/Fetching.jsx'
import { LocalStorage } from './components/LocalStorage.jsx'
import { GetPost } from './components/GetPost.jsx'

function App() {

  return (
    <>
      <Input />
      <Counter />
      <Fetching />
      <LocalStorage />
      <GetPost />
    </>
  )
}

export default App
