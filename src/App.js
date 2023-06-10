import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import CoinsList from './components/Main';
import Metrics from './components/Metrics';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<CoinsList />} />
            <Route path="/metrics" element={<Metrics />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
