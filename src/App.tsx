import Layout from './components/Layout'
import Hero from './components/Hero'
import Clients from './components/Clients'
import Expertises from './components/Expertises'
import Work from './components/Work'
import About from './components/About'
import './App.css'

function App() {
  return (
    <Layout>
      <Hero />
      <Clients />
      <Expertises />
      <Work />
      <About />
    </Layout>
  )
}

export default App
