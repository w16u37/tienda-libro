import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import { arregloProductos } from "../baseDatos/baseDatos";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = ()=> {
    // const categoryName = useParams().categoryName;
    const {categoryName} = useParams();

    const [productos, setProductos] = useState([]);
    
    const promesa = new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve(arregloProductos);
        }, 2000)
    })

    useEffect(()=>{
        promesa.then(resultado=>{
            if(categoryName){
                const productsFiltered = resultado.filter(elm => elm.categoria === categoryName);
                setProductos(productsFiltered);
            } else {
                setProductos(resultado);
            }            
        })
    },[categoryName])

    return(
        <div className="item-list-container">
            <p>item list container</p>
            <ItemList items={productos}/>
        </div>
    )
}