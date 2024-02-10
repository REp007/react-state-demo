
const AfficherPersonnes = ({ data }) => {
    return (
        <>
            {data.length !== 0 && (
                data.map((elem, index) => (
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
    );
};

export default AfficherPersonnes;
