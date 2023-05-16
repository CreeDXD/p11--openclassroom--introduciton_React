import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Accueil from './pages/Home/Accueil'
import FicheLogement from './pages/FicheLogement'
import PageErreur from './pages/PageErreur'
import APropos from './pages/APropos'


ReactDOM.render(
  <React.StrictMode>
    <Router>      
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/FicheLogement" element={<FicheLogement />} />
        <Route path="/PageErreur" element={<PageErreur />} />
        <Route path="/APropos" element={<APropos />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)