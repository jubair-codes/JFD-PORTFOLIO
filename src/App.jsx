import './App.css'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <div>
      <Navbar />
      <main className='w-[85rem] mx-auto'>
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App
