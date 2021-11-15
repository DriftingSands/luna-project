import styled from "styled-components";

export const MainHeader = styled.div`
  position: sticky;
  height: 71px;
  display: flex;
  align-items: flex-end;
  background-color: #f2f2f2;
  top: 0;
  z-index: 1000;
`;

export const LeftHeader = styled.div`
  font-family: Helvetica;
  font-size: 20px;
  font-weight: 400;
  font-style: normal;
  position: absolute;
  top: 0;
  left: 2vw;
  display: flex;
`;

export const Logo = styled.a`
  width: 144px;
  min-height: 45px;
  z-index: 99;
  img {
    margin-top: 0.6vw;
    cursor: pointer;
  }
`;

export const HeaderLink = styled.a`
  display: flex;
  align-items: center;
  text-align: center;
  color: #4a4a4a;
  text-decoration: none;
  cursor: pointer;
  z-index: 99;
  margin-right: 5vw;
  height: 100%;
  box-sizing: border-box;
  :hover,
  &.active {
    font-weight: 700;
    border-bottom: 3px solid #e47d31;
  }
`;

export const RightHeader = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  width: 100vw;
  height: 71px;
  top: 0;
  right: 2vw;
  align-items: center;
`;

export const ButtonLeft = styled.button`
  background-color: #e47d31;
  border: none;
  color: #fff;
  font-size: 16px;
  padding: 12px;
  width: max(7vw, 100px);
  cursor: pointer;
  margin-right: 1px;
  border-radius: 28px 0 0 28px;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
    color: #4a4a4a;
  }
`;

export const ButtonRight = styled(ButtonLeft)`
  border-radius: 0 28px 28px 0;
  margin: 0 0 0 1px;
`;

export const ButtonLogout = styled(ButtonLeft)`
  border-radius: 28px;
  margin: 0 1px;
`;
