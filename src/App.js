import logo from './logo.svg';
import './App.css';
import Wave from './landing/Wave';
import Wave2 from './landing/Wave2';
import Banner from './landing/Banner';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <ParallaxProvider>
      <Banner/>
    </ParallaxProvider>
  );
}

export default App;
