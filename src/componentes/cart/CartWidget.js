const CartWidget= () => {
  const cantidad = 0;

  return (
    <>
      <button>
        <span className="material-icons">shopping_cart</span>
      </button>
      <span>{cantidad}</span>
    </>
  );
}

export default CartWidget;