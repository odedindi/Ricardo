// ======================== react =========================
import React from 'react';
// ======================== styles ========================
import * as S from './style';
import ArticleCard from '../ArticleCard';
// ====================== components ======================
import { message } from 'antd';
import { Menu, MenuItem } from '@material-ui/core';
// ========================================================

const Cart: React.FC<CartProps> = ({
	cartItems,
	removeFromCartHandler,
}) => {
	const calculateTotal = (items: SearchArticle[]) =>
		items.reduce(
			(acc: number, item: SearchArticle) => acc + item.buyNowPrice,
			0,
		);

	const confirmRemove = (id: Id) => {
		message.info('Article removed');
		removeFromCartHandler(id);
	};

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(
		null,
	);

	const handleClick = (
		event: React.MouseEvent<HTMLButtonElement>,
	) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<S.CartWrapper>
			{!cartItems.length ? (
				<p>No items yet.</p>
			) : (
				cartItems.map((article: SearchArticle) => (
					<>
						<ArticleCard
							key={article.id}
							cardType="small"
							onClick={handleClick}
							{...article}
						/>
						<Menu
							id="simple-menu"
							anchorEl={anchorEl}
							keepMounted
							open={Boolean(anchorEl)}
							onClose={handleClose}>
							<MenuItem onClick={handleClose}>To The Item</MenuItem>
							<MenuItem onClick={() => confirmRemove(article.id)}>
								Remove Item
							</MenuItem>
						</Menu>
					</>
				))
			)}
			<h2>Total: CHF {calculateTotal(cartItems).toFixed(2)}</h2>
		</S.CartWrapper>
	);
};

export default Cart;
