// import Form from "./components/Form/Form";




//! Controlle 1 React 
import Dashboard from './components/Store/Dashboard';


interface Product{
  id: number,
  nomProduct: string,
  marque: string,
  prix: number
}

const ProductData: Product[] = [
  {id: 1, nomProduct: 'Produit1', marque:'marque1', prix: 145},
  {id: 2, nomProduct: 'Produit2', marque:'marque2', prix: 30},
  {id: 3, nomProduct: 'Produit3', marque:'marque3', prix: 50}
] 


const App = () => {
  return (
    <>
    <h1>Product Panel</h1>

    <Dashboard ProductData={ProductData}/>

    </>
  )
}

export default App;