import React, { useState } from "react";
import './style.css';
import AfficherPersonnes from './AfficherPersonnes';
import HeaderTable from './HeaderTable';


interface Personne {
    nom: string,
    ville: "" | "Casablanca" | "Rabat" | "Rabat"
    genre: "" | "H" | "F",
    dateNaissance: string,
    competences: string[]
}


const Form = () => {

    const [personne, setPersonne] = useState<Personne>({
        nom: '',
        ville: '',
        genre: '',
        dateNaissance: '',
        competences: []
    });


    const [errors, setErrors] = useState<string[]>();
    const [data, setData] = useState<Personne[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, type, value } = e.target;
    
        if (type === 'checkbox') {

            //  type assertion
            const isChecked = (e.target as HTMLInputElement).checked;
            let listComptences = [...personne.competences];
    
            if (isChecked) {
                listComptences.push(value);
            } else {
                if (listComptences.includes(value)) {
                    listComptences = listComptences.filter((elem) => elem !== value);
                }
            }
            setPersonne((prev) => ({ ...prev, competences: [...listComptences] }));
    
            console.log(listComptences);
        } else {
            setPersonne({ ...personne, [name]: value });
        }
    }
    

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(personne);

        const newErrors: string[] = [];

        if (personne.nom === '') {
            newErrors.push('Please enter a name.');
        }
        if (personne.ville === '') {
            newErrors.push('Please select a city.');
        }
        if (personne.genre === '') {
            newErrors.push('Please select a gender.');
        }
        if (personne.dateNaissance === '') {
            newErrors.push('Please enter a date of birth.');
        }
        if (personne.competences.length === 0) {
            newErrors.push('Please select at least one skill.');
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
                    {errors?.length !== 0 && (
                        errors?.map((elem: string, index: number) => (<li key={index}>{elem}</li>))
                    )}
                </ul>
            </div>
            <form action="" onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <td>Nom : </td>
                        <td>
                            <input type="text" name="nom" id=""
                                onChange={handleChange}
                                value={personne.nom} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Ville :
                        </td>
                        <td>
                            <select name="ville" value={personne.ville} onChange={handleChange} id="">
                                <option value="">Selection un ville</option>
                                <option value="Casablanca">Casablanca</option>
                                <option value="Rabat">Rabat</option>
                                <option value="Rabat">Agadir</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Genre : </td>
                        <td>
                            <input type="radio" value={"H"} checked={personne.genre === "H"} onChange={handleChange} name="genre" id="" /> Homme
                            <input type="radio" value={"F"} checked={personne.genre === "F"} onChange={handleChange} name="genre" id="" /> Femme
                        </td>
                    </tr>
                    <tr>
                        <td>Date de Naissance: </td>
                        <td>
                            <input type="date" name="dateNaissance" value={personne.dateNaissance} onChange={handleChange} id="" />
                        </td>
                    </tr>
                    <tr>
                        <td>Comptence :</td>
                        <td>
                            <input type="checkbox" name="competences" onChange={handleChange} value={"Java"} />Java &nbsp;&nbsp;
                            <input type="checkbox" name="competences" onChange={handleChange} value={"React"} />React &nbsp;&nbsp;
                            <input type="checkbox" name="competences" onChange={handleChange} value={"Css"} />Css
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="submit" value="Afficher" />
                        </td>
                        <td>

                        </td>
                    </tr>
                </table>


                <div className="result">
                    <table border={2}>
                        <HeaderTable/>
                        <tbody>
                            <AfficherPersonnes data={data} />
                        </tbody>

                        <tfoot>

                        </tfoot>
                    </table>
                </div>
            </form>
        </>
    )
}

export default Form;