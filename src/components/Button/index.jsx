// ====================== styles ==========================
import * as S from './style';

const Button = ({ children, isButtonDisabled, onClickHandler }) => (
	<S.Button disabled={isButtonDisabled} onClick={onClickHandler}>
		{children}
	</S.Button>
);

export default Button;
