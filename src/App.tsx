import Layout from './components/Layout'
import Hero from './components/Hero'
import './App.css'

function App() {
  return (
    <Layout>
      <Hero />
      
      {/* Scroll spacer to observe footer */}
      <section style={{ height: '30vh', background: 'var(--bg-color)' }}></section>
    </Layout>
  )
}

export default App
