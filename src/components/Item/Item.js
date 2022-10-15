import "../Item/Item.css";

export const Item = ({item})=>{
    return(
        <div className="tarjeta-producto">
            <img src={item.pictureUrl} alt={item.title}/>
            <h4>{item.title}</h4>
            <p>$ {item.price}</p>
            <button className="boto-ver">Ver detalle...</button>
        </div>
    )
}