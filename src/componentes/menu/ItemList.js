import React from 'react'
import Item from './Item'




const ItemList= props => {

    return(
        <div>
            {props.data.map(item => (
                <Item key={item.id} name={item.nombre} image={item.img}>
                </Item>
            ))}
        </div>
        )
}

export default ItemList;