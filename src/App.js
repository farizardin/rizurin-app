import './App.css';
import Banner from './pages/home/Banner';
import { ParallaxProvider } from 'react-scroll-parallax';
import Particle from './components/Particles';
function App() {
  return (
    <ParallaxProvider>
      <Banner/>
    </ParallaxProvider>
    // <div style={{ position: "relative", height: "100vh", width: "100%" }}>
    //   <Particle/>
    // </div>
  );
}

export default App;