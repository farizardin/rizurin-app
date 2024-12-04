import './App.css';
import Banner from './pages/home/Banner';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <ParallaxProvider>
      <Banner/>
    </ParallaxProvider>
  );
}

export default App;
