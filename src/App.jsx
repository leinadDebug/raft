import './App.css'
import Confidently from './component/Confidently'
import FAQ from './component/FAQ'
import Financial from './component/Financial'
import GenCards from './component/GenCards'
import Section from './component/Section'
import Stats from './component/Stats'
import Intro from './component/intro'
import NavBar from './component/navbar'

function App() {


  return (
    <div className="font-sfProDisplay font-normal">
      <NavBar />
      <Intro />
      <Section />
      <Financial />
      <Confidently />
      <Stats/>
      <GenCards/>
      <FAQ/>
    </div>
  );
}

export default App
