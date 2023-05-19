import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Accueil from './pages/Home/Accueil'
import FicheLogement from './pages/FicheLogement'
import PageErreur from './pages/PageErreur'
import APropos from './pages/APropos'

ReactDOM.render(
  <React.StrictMode>
    <Router>      
      <Routes>
        <Route exact path="/" element={<Accueil />} />
        <Route path="/FicheLogement/:id" element={<FicheLogement />} />
        <Route path="/APropos" element={<APropos />} />
        <Route path="*" element={<PageErreur/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)