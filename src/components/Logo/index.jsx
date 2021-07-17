// ====================== router ==========================
import { Link } from 'react-router-dom';
// ======================= logo ===========================
import logo from '../../assets/logo.svg';
// ========================================================

const Logo = () => (
	<Link to={'/'}>
		<img
			src={logo}
			alt="Ricardo's Logo"
			height="35rem"
			style={{ marginTop: '2rem' }}
		/>
	</Link>
);

export default Logo;
