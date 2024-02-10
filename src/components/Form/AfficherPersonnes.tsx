interface Personne {
    nom: string,
    ville: "" | "Casablanca" | "Rabat" | "Rabat"
    genre: "" | "H" | "F",
    dateNaissance: string,
    competences: string[]
}


interface Props {
    data: Personne[]
}

const AfficherPersonnes = ({ data }: Props) => {
    return (
        <>
            {data.length !== 0 && (
                data.map((elem: Personne, index: number) => (
                    <tr key={index}>
                        <td>{elem.nom}</td>
                        <td>{elem.ville}</td>
                        <td>{elem.genre}</td>
                        <td>{elem.dateNaissance}</td>
                        <td>{elem.competences.join(", ")}</td>
                    </tr>
                ))
            )}
        </>
    )
}

export default AfficherPersonnes;