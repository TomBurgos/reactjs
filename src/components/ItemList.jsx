import Item from './Item';
import { CardGroup } from 'react-bootstrap';

const ItemList = ({productos}) =>{
    return(
        <>
        <div className="item-list">
            <CardGroup>{productos.map((producto) => <Item key={producto.id} pictureUrl={producto.pictureUrl} title={producto.title} description={producto.description} price={producto.price}/>)}</CardGroup>
        </div>
        </>
    )
}

export default ItemList;