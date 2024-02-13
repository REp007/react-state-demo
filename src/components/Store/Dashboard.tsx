import React, { useState } from "react";
import ListCommands from "./ListCommands";

interface Product {
    id: number,
    nomProduct: string,
    marque: string,
    prix: number
}

interface ProductProps {
    ProductData: Product[]
}

interface commande {
    idCommande: number,
    nomProduit: string,
    marque: string,
    prix: number,
    quantite: number,
    total: number
}


const Dashboard = ({ ProductData }: ProductProps) => {

    const [commandeData, setCommandeData] = useState<commande[]>([]);
    const [currentIdCommande, setCurrentIdCommande] = useState<number>(1);
    const [commande, setCommande] = useState<commande>({
        idCommande: 0,
        nomProduit: '',
        marque: '',
        prix: 0,
        quantite: 0,
        total: 0
    });
    // console.log(Product);

    const hanldeChangeProductInfo = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        // console.log(value);
        if (value === "") {
            setCommande((prev) => ({
                ...prev,
                nomProduit: value,
                marque: "",
                prix: 0
            }));
        } else {
            const ProductInfo = ProductData.find((product) => product.nomProduct === value);
            console.log(ProductInfo);
            if (ProductInfo) {
                setCommande((prev) => ({
                    ...prev,
                    nomProduit: value,
                    marque: ProductInfo.marque,
                    prix: ProductInfo.prix
                }));
            }
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        setCommande((prev) => ({ ...prev, [name]: value, total: Number(value) * commande.prix }));
    }


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    const hanldeClick = () => {
        console.log('click data');

        // console.log(commandeData);

        console.log('Updated commande:', { ...commande });

        // Insert commande into commandeData
        setCommandeData((prev) => {
            // Update the previous state with the new value
            const updatedPrev = [
                ...prev,
                { ...commande, idCommande: currentIdCommande }
            ];
            // Log the updated state
            // console.log(updatedPrev);
            // Return the updated state
            return updatedPrev;
        });
        setCurrentIdCommande((prev) => prev + 1);

    }


    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                Product :
                            </td>
                            <td>
                                <select name="nomProduit"
                                    onChange={hanldeChangeProductInfo}
                                >
                                    <option value="">Select Product</option>
                                    {ProductData.map((product) => {
                                        return (<option key={product.id} value={product.nomProduct}>{product.nomProduct}</option>)
                                    })}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Marque :
                            </td>
                            <td>
                                <input
                                    name="marque"
                                    value={commande.marque}
                                    type="text" readOnly />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Prix :
                            </td>
                            <td>
                                <input
                                    type="number"
                                    value={commande.prix}
                                    name="prix" id="" readOnly />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Quantite :
                            </td>
                            <td>
                                <input
                                    type="number"
                                    name="quantite"
                                    onChange={handleInputChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <input type="button" onClick={() => hanldeClick()} value="Add Product" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>



            <div className="result">
                <ListCommands commandeData={commandeData} />
            </div>
        </>
    )
}

export default Dashboard