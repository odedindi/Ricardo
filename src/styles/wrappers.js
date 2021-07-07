import styled from 'styled-components';


export const HomePageWrapper = styled.div `
    padding-top: 5rem;
    width: 90%;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    
    @media only screen and (max-width: 768px) {
        width: 80%;
    };

    @media only screen and (max-width: 480px) {
        width: 70%;
    };
`;

export const ResultsWrapper = styled.div `
    padding-top: 1rem;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(235px, 1fr));
    grid-template-rows: repeat(auto-fit, 350px);
    grid-gap: 1rem;
    grid-auto-flow: dense;

    @media only screen and (max-width: 1024px) {
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    };
    
    @media only screen and (max-width: 768px) {
        justify-items: center;
        grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));
    };
`;

export const ArticleWrapper = styled.div `
    display: flex;
    flex-flow: row;
    align-items: flex-start;
    align-items: flex-start;

    img {
        width: 40vw;
        min-width: 18rem;
        max-width: 45rem;
    };

    @media only screen and (max-width: 1024px) {
        flex-flow: row wrap;
        justify-content: center;
    };
`;