import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Accueil from './pages/Home/Accueil'
import FicheLogement from './pages/FicheLogement'
import PageErreur from './pages/PageErreur'
import APropos from './pages/APropos'
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <Router>      
      <Routes>
        <Route exact path="/" element={<Accueil />} />
        <Route path="/FicheLogement/:id" element={<FicheLogement />} />
        <Route path="/APropos" element={<APropos />} />
        <Route path="/Error" element={<PageErreur />} />
        <Route path="*" element={<PageErreur />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
