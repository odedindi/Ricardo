import styled from 'styled-components';

const Logo = styled.p `
    color: ${ ({ theme }) => theme.colors.brand };
    font-weight: bold;
`
export const SmallLogo = styled(Logo) `
    font-size: 3rem;
`

export const BigLogo = styled(Logo) `
    font-size: 3.5rem;
`