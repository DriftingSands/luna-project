import styled from "styled-components";

const footerHeight = '95px'

export const MainFooter = styled.div`
  position: fixed;
  display: flex;
  align-items: flex-end;
  height: ${footerHeight};
  width: 100%;
  bottom: 0;
  z-index: 100;
  background-color: #ffffff;
`;

export const LeftFooter = styled.div`
  font-family: Helvetica;
  font-size: 20px;
  font-weight: 400;
  font-style: normal;
  position: absolute;
  height: 56px;
  top: 0;
  left: 2vw;
  display: flex;
  padding: 16px 0;
`;

export const FirstFooterLink = styled.a`
  text-align: center;
  letter-spacing: 0;
  color: #646363;
  text-decoration: none;
  cursor: pointer;
  z-index: 99;
`;

export const FooterLink = styled(FirstFooterLink)`
  margin-left: 5vw;
`;

export const RightFooter = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row-reverse;
  width: 100vw;
  height: 56px;
  top: 0;
  right: 1.4vw;
`;

export const SocialIcon = styled.a`
  position: relative;
  top: 8px;
  right: 0;
  margin: 0 0.75vw;
  cursor: pointer;
  z-index: 98;
`;

export const CopyrightFooter = styled.div`
  position: absolute;
  width: 100%;
  height: 40px;
  top: 52px;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
  border-top: 1px solid #d8d8d8;
  color: #646363;
`;

export const CopyrightLuna = styled.div`
  font-family: Helvetica;
  font-size: 14px;
  height: 37px;
  letter-spacing: 0;
  padding: 12px 2vw;
`;
