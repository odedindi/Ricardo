// ====================== react ===========================
import React, { useEffect, useState } from 'react';
// ====================== styles ==========================
import * as S from './style';
import Logo from '../../Logo';
// ======================== store =========================
import { useStore } from '../../../store';
import * as ACTION from '../../../store/actions';
// ====================== components ======================
import CartButton from '../../Buttons/CartButton';
import Cart from '../../Cart';
import { Drawer } from 'antd';

const NavBar: React.FC = () => {
	const { state, dispatch }: Store = useStore();

	const [isCartVisible, setIsCartVisible] = useState(false);
	const openCartHandler = () => setIsCartVisible(true);
	const closeCartHandler = () => setIsCartVisible(false);

	// listen to width of the window
	const [windowWidth, setWindowWidth] = useState<number>(
		window.innerWidth,
	);
	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const [drawerWidth, setDrawerWidth] = useState<string>('45%');
	useEffect(() => {
		if (windowWidth > 1280) {
			return setDrawerWidth('35%');
		} else if (windowWidth > 768) {
			return setDrawerWidth('45%');
		} else {
			return setDrawerWidth('100%');
		}
	}, [windowWidth]);

	const removeFromCartHandler = (id: Id) => {
		console.log('from removeFromCartHandler: ', id);
		dispatch(ACTION.removeArticleFromCart(id));
	};
	return (
		<S.NavBarWrapper>
			<Drawer
				placement="right"
				closable={true}
				visible={isCartVisible}
				onClose={closeCartHandler}
				width={drawerWidth}>
				<Cart
					cartItems={state.cartItems}
					removeFromCartHandler={removeFromCartHandler}
				/>
			</Drawer>

			<Logo />

			<div className="cartButton">
				<CartButton onClick={openCartHandler} buttonType="openCart" />
			</div>
		</S.NavBarWrapper>
	);
};

export default NavBar;
