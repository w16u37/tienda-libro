import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import { arregloProductos } from "../baseDatos/baseDatos";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = ()=> {
    const [productos, setProductos] = useState([]);
    
    const promesa = new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve(arregloProductos);
        }, 2000)
    })

    useEffect(()=>{
        promesa.then(resultado=>{
            setProductos(resultado)
        })
    },[])

    return(
        <div className="item-list-container">
            <p>item list container</p>
            <ItemList items={productos}/>
        </div>
    )
}