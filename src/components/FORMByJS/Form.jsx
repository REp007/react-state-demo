import React, { useState } from "react";
import './style.css';
import AffciherPersonnes from './AffciherPersonnes';
import HeaderTable from './HeaderTable';

const Form = () => {
    const [personne, setPersonne] = useState({
        nom: '',
        ville: '',
        genre: '',
        dateNaissance: '',
        competences: []
    });

    const [errors, setErrors] = useState([]);
    const [data, setData] = useState([]);

    const handleChange = (e) => {
        const { name, type, value } = e.target;
        if (type === 'checkbox') {
            const isChecked = e.target.checked;
            let listComptences = [...personne.competences];
            if (isChecked) {
                listComptences.push(value);
            } else {
                if (listComptences.includes(value)) {
                    listComptences = listComptences.filter((elem) => elem !== value);
                }
            }
            setPersonne((prev) => ({ ...prev, competences: [...listComptences] }));
        } else {
            setPersonne({ ...personne, [name]: value });
        }
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = [];
        if (personne.nom === '') {
            newErrors.push('nom its required');
        }
        if (personne.ville === '') {
            newErrors.push('choose a ville');
        }
        if (personne.genre === '') {
            newErrors.push('Choose a Genre');
        }
        if (personne.dateNaissance === '') {
            newErrors.push('Date de naissance is required');
        }
        if (personne.competences.length === 0) {
            newErrors.push('Should choose  an Comptences');
        }

        if (newErrors.length > 0) {
            setErrors(newErrors);
            return;
        }

        setData([...data, { ...personne }]);
        setPersonne({
            nom: '',
            ville: '',
            genre: '',
            dateNaissance: '',
            competences: []
        });
        setErrors([]);
    }

    return (
        <>
            <div className="alert">
                <ul>
                    {errors.length !== 0 && (
                        errors.map((elem, index) => (<li key={index}>{elem}</li>))
                    )}
                </ul>
            </div>
            <form action="" onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>Nom : </td>
                            <td>
                                <input type="text" name="nom" onChange={handleChange} value={personne.nom} />
                            </td>
                        </tr>
                        <tr>
                            <td>Ville : </td>
                            <td>
                                <select name="ville" value={personne.ville} onChange={handleChange}>
                                    <option value="">Selection un ville</option>
                                    <option value="Casablanca">Casablanca</option>
                                    <option value="Rabat">Rabat</option>
                                    <option value="Agadir">Agadir</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Genre : </td>
                            <td>
                                <input type="radio" value="H" checked={personne.genre === "H"} onChange={handleChange} name="genre" /> Homme
                                <input type="radio" value="F" checked={personne.genre === "F"} onChange={handleChange} name="genre" /> Femme
                            </td>
                        </tr>
                        <tr>
                            <td>Date de Naissance: </td>
                            <td>
                                <input type="date" name="dateNaissance" value={personne.dateNaissance} onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>Comptence : </td>
                            <td>
                                <input type="checkbox" name="competences" onChange={handleChange} value="Java" /> Java &nbsp;&nbsp;
                                <input type="checkbox" name="competences" onChange={handleChange} value="React" /> React &nbsp;&nbsp;
                                <input type="checkbox" name="competences" onChange={handleChange} value="Css" /> Css
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="submit" value="Afficher" />
                            </td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <div className="result">
                <table border={2}>
                    <HeaderTable />
                    <tbody>
                        <AffciherPersonnes data={data} />
                    </tbody>
                    <tfoot></tfoot>
                </table>
            </div>
        </>
    )
}

export default Form;
