import React from "react";

export default function MonComposant(props) {
    const { actions } = props;

    return (
        <>
        
            <div className="container justify-content-centre border pt-4 mt-">
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Non</th>
                        <th>Prénom</th>
                        <th>Email</th>
                        <th>Numéro</th>
                        <th>Classe</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {actions.map((listee) => (
                        <tr className="table-active" key={listee.id}>
                            <td>#</td>
                            <td>{listee.nom}</td>
                            <td>{listee.prenom}</td>
                            <td>{listee.email}</td>
                            <td>{listee.numero}</td>
                            <td>{listee.classe}</td>
                            <td>{listee.image}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </>
    );
}
