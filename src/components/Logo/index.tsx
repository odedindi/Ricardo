// ========================= react =========================
import React from 'react';
import { Link } from 'react-router-dom';
// ========================= style =========================
import * as S from './style';
// ======================== logo ===========================
import logo from '../../assets/logo.svg';
// ====================== components =======================
import Breadcrumbs from './Breadcrumbs';
// =========================================================
const Logo: React.FC = () => {
	return (
		<>
			<Link to={'/'}>
				<S.Logo data-testid="logo" src={logo} alt="Ricardo's Logo" />
			</Link>
			<Breadcrumbs />
		</>
	);
};

export default Logo;
