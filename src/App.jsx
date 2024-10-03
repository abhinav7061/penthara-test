import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='flex flex-col items-center '>
      <div className='max-w-[16000px] w-full'>
        <Navbar />
        <Hero />
      </div>
    </div>
  )
}

export default App
