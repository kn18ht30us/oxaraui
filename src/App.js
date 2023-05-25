import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Foot from './components/Foot';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>

      <main style={{minHeight: '100vh',}}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Navigate to={'/'} />} />
        </Routes>
      </main>

      <Foot></Foot>
    </BrowserRouter>
  );
}

export default App;
