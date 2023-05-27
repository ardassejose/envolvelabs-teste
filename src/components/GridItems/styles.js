import styled from "styled-components";

export const GridItems = styled.div`
  height: 216px;
  width: 201px;
  cursor: pointer;
  border-radius: 4px;
  background-color: #45556c;
  box-shadow: 0px 12px 24px -12px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 0px 12px 24px -12px rgba(0, 0, 0, 0.5);
  transition: 0.3s ease-out;

  &:hover {
    transform: scale(1.1);
  }

  &:hover {
    background-color: #45556cbd;
  }

  @media (max-width: 358px) {
    width: 100%;
    height: auto;
  }
`;

export const NameIcon = styled.p`
    padding: 9px 12px 1px;
`

export const ItemDesc = styled.div`
    font-size: 10px;
    font-family: 'Open Sans';
    padding: 0px 10px 15px 12px;
`

export const Icon = styled.div`
    display: flex;
    height: 110px;
    margin-bottom: 10px;
    justify-content: center;
    align-items: flex-end;
`

export const ImageIcon = styled.img`
    height: auto;
    width: auto;
    border-radius: 0px;
`

export const Points = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px 0px;
    margin-top: 3px;
    font-family: Open Sans;
    font-size: 18px;
    font-weight: 800;
    line-height: 25px;
    letter-spacing: 0.15px;
    text-align: center;
`