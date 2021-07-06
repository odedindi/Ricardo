import styled from 'styled-components';

export const HomePageWrapper = styled.div `
    padding-top: 5rem;

    display: flex;
    flex-direction: row;
    align-items: flex-start;

    width: 90%;
    
    @media only screen and (max-width: 768px) {
        width: 80%;
    };
    @media only screen and (max-width: 480px) {
        width: 70%;
    };
`
