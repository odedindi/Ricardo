// ========================= react =========================
import * as React from 'react';
// ====================== styles ==========================
import * as S from './style';
import CircularProgress from '@material-ui/core/CircularProgress';
// ========================================================

const Spinner: React.FC = () => (
	<S.SpinnerWrapper>
		<CircularProgress />
		<h2>Loading...</h2>
	</S.SpinnerWrapper>
);

export default Spinner;
