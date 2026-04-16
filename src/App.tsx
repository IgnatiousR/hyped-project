import Layout from "./components/Layout";
import Hero from "./components/Hero";
import About from "./components/About";
import Expertises from "./components/Expertises";
import SelectedWork from "./components/SelectedWork";
import SectionClients from "./components/SectionClients";
import "./App.css";

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Expertises />
      <SelectedWork />
      <SectionClients />
    </Layout>
  );
}

export default App;
