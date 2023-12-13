import { useState } from 'react'
import './App.css'

function App() {
const [produits, setProduits]=useState(
  
    [
      {id:1, nom:"Ordinateur"},
      {id:2, nom:"Telephone"},
      {id:3, nom:"Disuqe dure"}
    ]
  );

 const [nouveauProduits, setNouveauProduits]= useState("")

  const handleDelete =(id)=> {
    // console.log(id);

    const produitCopie = [...produits];
    const produitCopieUpdated = produitCopie.filter (produit => produit.id !==id);
    setProduits(produitCopieUpdated);
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    const produitsCopie = [...produits];
    const id = new Date().getTime;
    const nom = nouveauProduits;
    produitsCopie.push({id: id, nom: nom});
    setProduits(produitsCopie);
    setNouveauProduits("");

  }

  const handleChange = (event) =>{
    setNouveauProduits(event.target.value);
  }

  return (
    <dev class="you">
    <h2>Liste des produits</h2>
      <ul>
      {produits.map( (produit)=> {
        return <li key={produit.id}>
          {produit.nom} <button onClick={()=> handleDelete (produit.id)}>x</button>
          </li>
      }
      )}
      </ul>

      <form action="submit" onSubmit={handleSubmit}>
        <input value={nouveauProduits}
        type="text" placeholder='Ajouter un produit'
        onChange={handleChange}
        /> 
        <button>Ajouter+</button>
        
      </form>
      
    </dev>
  );
}

export default App
