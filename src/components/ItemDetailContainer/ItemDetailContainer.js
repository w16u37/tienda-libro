import { useState, useEffect } from "react";
import './ItemDetailContainer.css';
import { arregloProductos } from "../baseDatos/baseDatos";
import {ItemDetail} from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = ()=>{
    const {id} = useParams();
    const [itemProduct, setItemProduct] = useState({});

    const promesa = new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve(arregloProductos);
        }, 2000)
    })

    useEffect(()=>{
        const getProducto = async()=>{
            const productos = await promesa;
            console.log('producto',productos);
            const producto = productos.find(elemento=>elemento.id === parseInt(id));
            setItemProduct(producto);
        }
        getProducto();
    },[id])

    return(
        <div className="item-detail-container">
            <p className="itemdetailc">item detail container</p>
            <ItemDetail item = {itemProduct}/>
        </div>
    )
}