import Navbar from './navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import create from './create';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add more routes here */}
            <Route path="/create"  element={<create/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
