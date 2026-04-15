import Layout from "./components/Layout";
import Hero from "./components/Hero";
import About from "./components/About";
import Expertises from "./components/Expertises";
import "./App.css";

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Expertises />
    </Layout>
  );
}

export default App;
