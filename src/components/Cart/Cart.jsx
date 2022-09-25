import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import CartItem from "./cartItem";

const Cart = () => {
	const test = useContext(CartContext);

	const cartElements = test.cartList.map((el) => {
		return (
			<div key={el.id}>
				<CartItem
					id={el.id}
					Img={el.Img}
					name={el.name}
					quantity={el.quantity}
					price={el.price}
					removeItem={test.removeItem}
				/>
				<hr className="cartLines" />
			</div>
		);
	});

	return (
		<div className="cartSection">
			<div className="cartContainer">
				<div className="cartTitlesContainer">
					<h4 className="cartTitles">Producto</h4>
					<h4 className="cartTitles">Cantidad</h4>
					<h4 className="cartTitles">C/U</h4>
					<h4 className="cartTitles">Total</h4>
				</div>

				{test.cartList.length > 0 ? (
					cartElements
				) : (
					<div className="emptyCartContainer">
						<h1 className="cartTitle">El carrito esta vacio</h1>
						<Link to="/">
							<button className="goBackBtn">Ir a la Tienda</button>
						</Link>
					</div>
				)}

				<div className="cartBtnSection">
					<button className="buyBtn" onClick={test.clear}>
						Vaciar
					</button>
					<div className="totalSection">
						<span className="cartCant">Total: ${test.TotalPrice}</span>
						<button className="buyBtn">Comprar</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;