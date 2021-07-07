import styled from 'styled-components';


export const SpinnerWrapper = styled.div `
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -50px;
    margin-left: -50px;
    h2 {
        color: ${ ({ theme }) => theme.colors.brand };
    }
`;