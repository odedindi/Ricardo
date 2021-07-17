// ====================== react ===========================
import React from 'react';
// ====================== styles ==========================
import * as S from '../style';
// ======================== store =========================
import { useStore } from '../../../../store';
// ====================== components ======================
import { Badge } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// =======================================================

const OpenCartButton: React.FC<CartButtonProps> = ({ onClick }) => {
	const { state } = useStore();
	const { cartItems } = state;
	return (
		<S.CartButton onClick={onClick}>
			<Badge badgeContent={cartItems.length} color="error">
				<ShoppingCartIcon />
			</Badge>
		</S.CartButton>
	);
};

export default OpenCartButton;
