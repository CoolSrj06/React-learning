import { useState } from 'react'
import './App.css'
import Card from '../components/card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-2xl'>Tailwind test</h1>
      <Card title='Intro' name='Srijan Maurya'/>
      <Card title='Conclude' />
    </>
  )
}

export default App
