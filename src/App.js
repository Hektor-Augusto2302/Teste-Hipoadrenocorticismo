import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Question from './pages/Questions/Question';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/questions' element={<Question />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
