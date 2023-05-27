import styled from "styled-components";

export const GridStep2 = styled.section`
  height: 285px;
  width: 678px;
  color: #f2f2f2;
  border-radius: 2px;
  background: #21394f;
  overflow-y: scroll;
  box-shadow: 0px 12px 24px -12px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 0px 12px 24px -12px rgba(0, 0, 0, 0.5);

  h3 {
    font-weight: 700;
    font-size: 14px;
    padding: 15px;
  }

  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 1440px) {
    width: 80%;
  }
`;

export const GridBox = styled.div`
  width: 100%;
  padding: 20px 10px;
  height: 67.7px;
`;

export const GridImage = styled.img`
  width: 10%;
`;
