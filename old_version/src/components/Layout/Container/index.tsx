// ======================== react =========================
import React from 'react';
// ======================== styles ========================
import * as S from './style';
// ========================================================

const Container: React.FC<ContainerProps> = ({
	children,
	padding,
}) => (
	<S.ContainerWrapper padding={padding}>
		{children}
	</S.ContainerWrapper>
);

export default Container;
