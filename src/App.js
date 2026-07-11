import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from './pages/home-page/HomePage';
import HomelabPage from './pages/homelab-page/HomelabPage';
import YukiPage from './pages/yuki-page/YukiPage';
import ServicesPage from './pages/services-page/ServicesPage';
import AuthButton from './components/atoms/AuthButton';

function App() {
  return (
    <Router>
      <AuthButton />
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/homelab" element={<HomelabPage />} />
          <Route path="/yuki" element={<YukiPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;