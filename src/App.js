import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Accueil from './pages/addForm'
import Contact from './pages/Apropos';
import NoPage from './pages/NoPage';
// import Action from './pages/index'
import Menu from './components/menu'
import Apropos from './pages/Apropos';



function App() {

  const [actions, setActions] = useState([]);

  const AjoutF = (action) => {
    setActions([...actions, action]);
    console.log('Fonction AjoutF appelée depuis le composant parent :', action);
  };

  return (
    <>
      {/* <Link to ="/aPropos">kk</Link> */}
      <Router>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/aPropos" element={<Apropos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
