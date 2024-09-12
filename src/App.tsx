import './App.css';
import Header from './components/Header/Header';
import TrendingFunds from './components/TrendingFuns';
import FundTable from './components/Fund/FundTable';
import FundDetails from './components/Fund/FundDetailsPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { mockFunds } from './service/mockData';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<>
              <TrendingFunds />
              <FundTable funds={mockFunds} />
            </>} />
            <Route path="/fund/:id" element={<FundDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
