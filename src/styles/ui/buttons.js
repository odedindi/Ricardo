import styled from 'styled-components';

export const SearchButton = styled.button `
    border: solid 1px ${({ theme }) => theme.colors.elementBorder};
    border-radius: 0.125rem;
    background-color: ${ ({ active }) => active === false ? 'lightgray' : '#f4f4f8' };
    text-transform: uppercase;
    height: 2.5rem;
    width: 6.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    /* padding: 0.75rem; */
    font-weight: bold;
    font-size: 0.65rem;
    color: #aeb8f8;

    cursor: ${ ({ active }) => active === false ? 'not-allowed' : 'pointer' };

    pointer-events: ${ ({ active }) => active === false ? 'none' : '' };
    transition-delay: 0.25s;
`
