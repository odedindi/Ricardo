// ========================= react =========================
import React from 'react';
import { Link } from 'react-router-dom';
// ========================= style =========================
import * as S from './style'
// ======================== logo ===========================
import logo from '../../assets/logo.svg'
// =========================================================


const Logo: React.FC = () => (
    <Link to={'/'} >
        <S.Logo 
            src={ logo }
            alt="Ricardo's Logo"
        />
    </Link>
);

export default Logo;
