import styled from 'styled-components';

export const SearchWrapper = styled.div `
display: flex;
flex-direction: row;
align-items: center;

width: 85%;
@media only screen and (max-width: 768px) {
    width: 75%;
};
@media only screen and (max-width: 480px) {
    width: 70%;
};
`
export const InputWrapper = styled.div `
    width: 85%;
    margin-right: .5rem;

`