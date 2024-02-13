interface commande {
    idCommande: number,
    nomProduit: string,
    marque: string,
    prix: number,
    quantite: number,
    total: number
}

interface Props {
    commandeData: commande[]
}

const ListCommands = ({ commandeData }: Props) => {

    const totalAllCommandes = commandeData.reduce((total, commandeItem) => total + commandeItem.total, 0);

    return (
        <>
            <table border={2}>
                <thead>
                    <tr>
                        <th>idCommande : </th>
                        <th>nomProduit : </th>
                        <th>marque : </th>
                        <th>prix : </th>
                        <th>quantite : </th>
                        <th>total : </th>
                    </tr>
                </thead>
                <tbody>
                    {commandeData.map((commande, index) => (
                        <tr key={index}>
                            <td>{commande.idCommande}</td>
                            <td>{commande.nomProduit}</td>
                            <td>{commande.marque}</td>
                            <td>{commande.prix}</td>
                            <td>{commande.quantite}</td>
                            <td>{commande.total}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h3>Total : {totalAllCommandes}</h3>
        </>
    )
}

export default ListCommands