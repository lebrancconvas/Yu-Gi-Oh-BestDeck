import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';

// import StoreProvider from './context/searchContext';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
