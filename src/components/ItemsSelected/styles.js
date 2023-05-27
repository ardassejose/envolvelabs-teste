import styled from "styled-components";

export const ItemsSelected = styled.div`
  display: flex;
  justify-content: space-between;
  width: 648px;
  left: 745px;
  top: 161px;
  border-radius: 2px;
  background-color: #45556c;
  height: auto;
  margin: auto;
  padding: 15px 24px;
  margin-bottom: 2px;
  box-shadow: 0px 12px 24px -12px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 0px 12px 24px -12px rgba(0, 0, 0, 0.5);
  transition: 0.3s ease-in;
  animation: opIn 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;

  @keyframes opIn {
    0% {
      transform: scale(0.1);
    }
    100% {
      transform: scale(1);
    }
  }

  @media screen and (max-width: 768px) {
    max-width: 90%;
    flex-direction: column;
  }
`;

export const ItemLeftDesc = styled.div`
  display: flex;
  gap: 60px;

  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }
`;

export const ItemImage = styled.img`
  width: 25px;
  height: 42px;
`;

export const ItemText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ItemName = styled.p`
  font-family: Open Sans;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0.25px;
  text-align: left;
`;

export const ItemDescription = styled.p`
  font-family: Open Sans;
  font-size: 10px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;
`;

export const ItemRightDesc = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;

  @media screen and (max-width: 768px) {
    margin-top: 20px;
    justify-content: space-between;
  }
`;

export const ItemValue = styled.p`
  font-family: Open Sans;
  padding: 5px 50px;
  background-color: #293952;
  font-size: 13px;
  font-weight: 700;
  line-height: 18px;
  text-align: center;
  border-radius: 2px;
`;

export const ItemDelete = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 23px;
  background: linear-gradient(180deg, #75747e 0%, #4b495a 100%);
  border-radius: 2px;
  box-shadow: 0px 12px 24px -12px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 0px 12px 24px -12px rgba(0, 0, 0, 0.5);
  cursor: pointer;

  &:hover {
    transition: all 1s ease-out;
    background: #75747e;
  }
`;

export const ItemDeleteImage = styled.img`
  width: 9px;
  height: 11px;
`;
