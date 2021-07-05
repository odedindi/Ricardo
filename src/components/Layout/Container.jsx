import styled from "styled-components";

export const ContainerWrapper = styled.div`
    position: relative;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding: ${({ padding }) => (padding ? "1rem 4.8rem" : "1rem 2.5rem")};
    overflow: hidden;
    @media only screen and (max-width: 1024px) {
        max-width: 950px;
    };

    @media only screen and (max-width: 768px) {
        max-width: 700px;
    };

    @media only screen and (max-width: 414px) {
        max-width: 395px;
        border: solid 1px red;
    };
`;

const Container = ({ children, padding }) => (
    <ContainerWrapper padding={ padding } >
      { children }
    </ContainerWrapper>
  );
  
  export default Container;
  