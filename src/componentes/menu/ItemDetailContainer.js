import ItemDetail from "./ItemDetail"
import { useState, useEffect} from 'react'



// const showProduct= {
//      nombre: 'Rogel',
//      precio: 2500
// }
const ItemDetailContainer = () =>{

const promesa= ()=>{
     return new Promise((res,rej)=>
      setTimeout(()=>
      res({ 
      id: 7, 
      img: '/rogel.jpg',
      nombre: 'Rogel',
      precio: 2500}) ,2000))}

const [getItem, setProductos]=useState({});
useEffect(() => {
  promesa().then((info)=>{
    setProductos(info)
  })
}, [])
    return(
        <div>
            <ItemDetail producto={getItem} />
        </div>
    )
}
export default ItemDetailContainer