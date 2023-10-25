import './App.css'
import Financial from './component/Financial'
import Intro from './component/intro'
import NavBar from './component/navbar'

function App() {


  return (
    <div className="font-sfProDisplay font-normal">
      <NavBar />
      <Intro/>
      <Financial/>
    </div>
  )
}

export default App
