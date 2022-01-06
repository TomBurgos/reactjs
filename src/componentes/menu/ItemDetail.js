import ItemCount from './ItemCount';

 

const ItemDetail=({producto})=>{

       const onAdd= (cantidad) => {
    console.log("Agregar al carrito")
    console.log("cantidad de items" + cantidad)
}

    return(
        <div>
            <h4>Detalle del Producto</h4>
            <img src={producto.img} alt="" />
            <p>{producto.nombre}</p>
            <p>${producto.precio}</p>
            <ItemCount stock={10} initial={0} onAdd={onAdd}/>
        </div>
        )

}
export default ItemDetail