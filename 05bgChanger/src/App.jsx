import './App.css'
import { useState } from 'react'

function App() {

  const [color, setColor] = useState('blue');

  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex justify-center gap-3 flex-wrap shadow-lg px-4 py-2 bg-amber-50 rounded-2xl'>
          <button className='outline-none px-4 py-1 rounded-full text-amber-50 shadow-lg' 
            style={{background: 'red'}} onClick={() => setColor('red')}>Red</button>
          <button className='outline-none px-4 py-1 rounded-full text-amber-50 shadow-lg' 
            style={{background: 'blue'}} onClick={() => setColor('blue')}>Blue</button>
          <button className='outline-none px-4 py-1 rounded-full text-amber-50 shadow-lg' 
            style={{background: 'green'}} onClick={() => setColor('green')}>Green</button>
          <button className='outline-none px-4 py-1 rounded-full text-amber-50 shadow-lg' 
            style={{background: 'purple'}} onClick={() => setColor('purple')}>Purple</button>
          <button className='outline-none px-4 py-1 rounded-full text-amber-50 shadow-lg' 
            style={{background: 'olive'}} onClick={() => setColor('olive')}>Olive</button>
        </div>  
      </div>   
    </div>
  )
}

export default App
