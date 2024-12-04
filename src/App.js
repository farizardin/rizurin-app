import './App.css';
import Banner from './pages/home/Banner';
import { ParallaxProvider } from 'react-scroll-parallax';
import ScrollReveal from './components/ScrollReveal';
function App() {
  return (
    <div>
      <ParallaxProvider>
        <Banner/>
      </ParallaxProvider>
      <ScrollReveal/>
    </div>

    // <div style={{ position: "relative", height: "100vh", width: "100%" }}>
    //   <Particle/>
    // </div>
  );
}

export default App;