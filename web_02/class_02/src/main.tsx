import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Procesar from './pages/procesar.tsx'

import './index.css'
import App from './App.tsx'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/procesar" element={<Procesar />} />
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
);
