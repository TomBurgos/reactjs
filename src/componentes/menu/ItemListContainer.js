import React from 'react'
import { useState, useEffect} from 'react'
// import { useParams } from "react-router-dom"
import ItemList from './ItemList'

const ItemListContainer = () => {

   const promesa= ()=>{
     return new Promise((res,rej)=>
      setTimeout(()=>
      res([
  {id: 1,img: '/brownie.jpg',nombre: 'Brownie',precio: 2500,},
  {id: 2,img: '/carrotcake.jpg',nombre: 'Carrot Cake',precio: 2500,},
  {id: 3,img: '/cheesecake.jpg',nombre: 'Cheese cake',precio: 2500,},
  {id: 4,img: '/Cocoydll.jpg',nombre: 'Coco y Dulce de Leche',precio: 2500,},
  {id: 5,img: '/keylimepie.jpg',nombre: 'Key Lime Pie',precio: 2500,},
  {id: 6,img: '/pasfrola.jpg',nombre: 'Pastafrola',precio: 2500,},
  {id: 7, img: '/rogel.jpg', nombre: 'Rogel', precio: 2500 },
]) ,2000))}

// const {id}= useParams()
//  console.log(id)


const [getProductos, setProductos]=useState([]);
useEffect(() => {
  promesa().then((info)=>{
    setProductos(info)
  })
}, [])
return(
  <div>
    <ItemList data={getProductos}/>
  </div>
)};
export default ItemListContainer;