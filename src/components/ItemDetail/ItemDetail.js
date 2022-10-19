import './ItemDetail.css';

export const ItemDetail = ({item})=>{
    return(
        <div className='detail-container'>
            <p className='dc-parrafo'>item detail</p>
            <div className='img-container'>
                <img src={item.pictureUrl} alt={item.title}></img>
            </div>
            <div className='img-container'>
                <h4>{item.title}</h4>
                <h5>$ {item.price}</h5>
            </div>
        </div>
    )
}