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

export const ResultsWrapper = styled.div `
    width: 80%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    grid-template-rows: repeat(auto-fit, 340px);
    grid-gap: 1rem;
    grid-auto-flow: dense;

    @media only screen and (max-width: 1080px) {
        /* border: solid 1px blue; */
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    };

    @media only screen and (max-width: 768px) {
        /* border: solid 1px green; */
        grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));
    };
    
`