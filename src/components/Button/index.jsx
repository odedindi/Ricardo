// ====================== styles ==========================
import * as S from './style';


const Button = ({ children, onClickHandler, state }) => (
    <S.Button
        active={ state.length > 0 ? true : false }
        onClick={ onClickHandler }
    >
        { children }   
    </S.Button>
)

export default Button;
