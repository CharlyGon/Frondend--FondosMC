import './App.css';
import Header from './components/Header';
import TrendingFunds from './components/TrendingFuns';
import FundTable from './components/FundTable';
import FundDetails from './components/FundDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { mockFunds } from './service/mockData';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<>
            <TrendingFunds />
            <FundTable funds={mockFunds} />
          </>} />

          <Route path="/fund/:id" element={<FundDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
