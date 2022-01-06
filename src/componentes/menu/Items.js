import React from 'react'
import { Link } from "react-router-dom";

const Item = props =>{
    return(
        <div>
          <h2>{props.name}</h2>
          <img src={props.image} alt="" />
           <Link to={`/producto/${props.id}`}> +</Link>
       </div>
    )}

export default Item;