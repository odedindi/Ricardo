// ====================== react ===========================
import React from 'react';
// ====================== styles ==========================
import * as S from '../style';
// ====================== components ======================
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
// =======================================================

const AddToCart: React.FC<CartButtonProps> = ({ onClick }) => (
	<S.CartButton
		onClick={onClick}
		color="primary"
		aria-label="add to cart">
		<AddShoppingCartIcon />
	</S.CartButton>
);

export default AddToCart;
