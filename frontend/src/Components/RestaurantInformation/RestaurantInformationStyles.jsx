import styled from "styled-components";

export const RestaurantInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 30vw;
  height: auto;
  background-color: #f5f5f5;
`;

export const TopDiv = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  border-bottom: 1px solid #d8d8d8;
`;
export const MiddleDiv = styled(TopDiv)`
  border: none;
`;

export const BottomDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 10px;
`;
export const ReviewButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  float: left;
  align-items: center;
  min-width: 200px;
  background-color: #e47d31;
  border: none;
  color: #fff;
  font-size: 16px;
  padding: 12px;
  width: max(7vw, 100px);
  cursor: pointer;
  border-radius: 28px;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
    color: #4a4a4a;
  }
`;

export const EditButton = styled(ReviewButton)`
  left: 218px;
`;

export const Text = styled.p`
  font-family: Helvetica;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
`;

export const Icon = styled.img`
  float: left;
  margin-right: 20px;
  height: 28px;
  width: 28px;
`;
