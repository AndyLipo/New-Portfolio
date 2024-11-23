import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="flex min-h-screen items-center justify-center">
      <h1 className="text-3xl font-bold text-blue-600">
        Hola Tailwind + Vite!
      </h1>
    </div>
    </>
  )
}

export default App
