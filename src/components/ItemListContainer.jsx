import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ItemList from './ItemList';
import db from '../firebase/firebase';
import { collection, getDocs } from '@firebase/firestore';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [cat, setCat] = useState('todos')

    const filtering = (props) => {
        setCat(props.target.value)
    }

   useEffect(() => {
       const getItems = collection(db, 'items');

       getDocs(getItems).then((res) =>{
           const results = res.docs.map( doc => {
               return {...doc.data(), id: doc.id};
           });
           cat === 'todos' ? 
           setProductos(results) : setProductos(results.filter(res => res.category === cat))
       })
   }, [cat])
   
    return (
        <>
            <Container fluid>
                <h2 style={{margin:'2rem'}} className="text-center">Productos</h2>
                <select defaultValue={'todos'} name="catFilter" id="catFilter" onChange={filtering}>
                    <option value="todos" selected>Todos</option>
                    <option value="juguetes">Juguetes</option>
                    <option value="accesorios">Accesorios</option>
                </select>
                <ItemList productos={productos}/>
            </Container>
        </>
    );
}

export default ItemListContainer;