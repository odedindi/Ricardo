// ====================== react ===========================
import React from 'react';
// ====================== components ======================
import OpenCart from './OpenCart';
import AddToCart from './AddToCart';
// =======================================================

const CartButton: React.FC<CartButtonProps> = (props) => {
	if (props.buttonType === 'openCart') return <OpenCart {...props} />;
	if (props.buttonType === 'addToCart')
		return <AddToCart {...props} />;
	return null;
};

export default CartButton;
