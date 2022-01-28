import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { ShopCartContext } from '../context/CartContext';

const CartWidget = () => {

  const {cant} = useContext(ShopCartContext);
  return (
    <>
      <div>
        <Link to={"/cart"}>
          <img src="https://img.icons8.com/external-those-icons-fill-those-icons/24/000000/external-shopping-cart-shopping-those-icons-fill-those-icons.png"/>        
        </Link>
        <h6>{cant}</h6>
      </div>
    </>
  );
};

export default CartWidget;