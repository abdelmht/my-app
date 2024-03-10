import React, { useEffect, useState } from "react"
import Form from "../components/form";
import { useNavigate } from "react-router-dom";
import Menu from "../components/menu";
export default function Ajouter() {
    const [actions, setActions] = useState([]);

    const AjoutF = (action) => {
        setActions((prev) => {
            return [...prev , action]
        });

        // state dans navigate permet d'envoyer des donnes dans une autre page
        navigate('/aPropos' , { state : {  actions : actions , auteur : "Diùmancje" }})
*
        console.log('Fonction AjoutF appelée depuis le composant parent :', action);
    };
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        email: '',
        numero: '',
        classe: '',
        image: '',
    });
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        AjoutF(formData)
        setFormData(
            {
                nom: '',
                prenom: '',
                email: '',
                numero: '',
                classe: '',
                image: '',
            }
        )

    }
    return (
        <>
      <Menu/>
        
            <div className="container border pt-2 justify-content-centre mt-5 pt-5">
               <Form handleSubmit={handleSubmit} formData={formData} setFormData={setFormData} />
            </div >

        </>
    )

}