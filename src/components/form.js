import React, { useEffect, useState } from 'react';

const Form = ({ handleSubmit , formData , setFormData  }) => {
 
  
    const [errors, setErrors] = useState({});

    useEffect(() => {
        // Validation des champs ici
        const validateForm = () => {
            const newErrors = {};

            // Validation du champ nom
            if (!formData.nom.trim()) {
                newErrors.nom = 'Le nom est requis';
            }

            // Validation du champ email
            if (!formData.email.trim()) {
                newErrors.email = 'L\'email est requis';
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
                newErrors.email = 'L\'email n\'est pas valide';
            }
            // Validation du champ numero
            if (!formData.numero.trim()) {
                newErrors.numero = 'Le numéro est requis';
            } else if (!/^[0-9]+$/.test(formData.numero)) {
                newErrors.numero = 'Le numéro doit contenir uniquement des chiffres';
            } else if (formData.numero.length !== 10) {
                newErrors.numero = 'Le numéro doit avoir exactement 10 chiffres';
            }
            // Validation du champ image
            if (!formData.image.trim()) {
                newErrors.image = 'L\'image est requise';
            } else if (!/\.(jpg|jpeg|png|gif)$/.test(formData.image)) {
                newErrors.image = 'L\'image doit être au format JPG, JPEG, PNG ou GIF';
            }

            // Vous pouvez ajouter d'autres validations pour les autres champs

            setErrors(newErrors);
        };

        validateForm();
    }, [formData]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleImageChange = (e) => {
        const file = e.target.files[0];

        setFormData({
            ...formData,
            image: file ? URL.createObjectURL(file) : '',
        });
    };
    return (
        <form onSubmit={handleSubmit}>


            <div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="nom">Nom:</label>
                        <input
                            type="text"
                            id="nom"
                            name="nom"
                            className="form-control"
                            value={formData.nom}
                            onChange={handleChange}
                        />
                        {errors.nom && <p>{errors.nom}</p>}
                    </div>

                    <div className="col">
                        <label htmlFor="prenom">Prénom:</label>
                        <input
                            type="text"
                            id="prenom"
                            name="prenom"
                            className="form-control"
                            value={formData.prenom}
                            onChange={handleChange}
                        />
                        {/* Ajoutez la validation pour le prénom si nécessaire */}
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p>{errors.email}</p>}
                    </div>

                    <div className="col">
                        <label htmlFor="numero">Numéro:</label>
                        <input
                            type="text"
                            id="numero"
                            name="numero"
                            className="form-control"
                            value={formData.numero}
                            onChange={handleChange}
                        />
                        {errors.numero && <p>{errors.numero}</p>}
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <label htmlFor="classe">Classe:</label>
                        <input
                            type="text"
                            id="classe"
                            name="classe"
                            className="form-control"
                            value={formData.classe}
                            onChange={handleChange}
                        />
                        {errors.classe && <p>{errors.classe}</p>}
                    </div>
                    <div className="col">
                        <label htmlFor="image">Image:</label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            className="form-control"
                            onChange={handleImageChange}
                        />
                        {errors.image && <p>{errors.image}</p>}
                        {formData.image && (
                            <img src={formData.image} alt="Aperçu de l'image" style={{ maxWidth: '100%' }} />
                        )}
                    </div>
                </div>
            </div>

            {/* Ajoutez les champs restants avec leurs validations */}

            <div className="d-grid gap-2 col-6 mx-auto mb-3 pb-2">
                <button className="btn btn-outline-info" type="submit">Soumettre</button>
            </div>
        </form>);
};

export default Form;