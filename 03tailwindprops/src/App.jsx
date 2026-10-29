import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
   <h1 className="bg-green-400 text-black px-6 py-3 rounded-xl text-4xl">Tailwind test</h1>
    </div>
  );
}

export default App;
