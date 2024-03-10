// MonComposantParent.js
import React, { useState } from "react";
import Accueil from '../pages/addForm';
import APropos from '../pages/List'; // Correction de l'importation

export default function MonComposantParent() {
  const [formValid, setFormValid] = useState(true);
  const [actions, setActions] = useState([]);

  const AjoutF = (action) => {
    setActions([...actions, action]);
    if (formValid) {
      console.log('Formulaire soumis avec succès!', action);
    } else {
      console.log('Le formulaire contient des erreurs. Veuillez les corriger avant de soumettre.');
    }
  };

  return (
    <>
      {/* Correction des noms des composants dans les importations */}
      <Accueil AjoutF={AjoutF} />
      <APropos actions={actions} />
    </>
  );
}
