import '../styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './Home';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="App">
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
