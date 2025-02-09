import '../styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './Home';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="App">
      <h1 className="home-header">Home</h1>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
