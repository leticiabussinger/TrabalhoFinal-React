import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: max-content;
  margin: 20px auto;
  background-color: #d0a971;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  img {
    width: 280px;
    margin-bottom: 20px;
    border-radius: 8px 8px 0 0;
    object-fit: cover;
  }
`;
export const ContainerInfos = styled.div`
  padding: 20px;
  h3 {
    margin: 15px 0 5px 0;
    font-size: 24px;
  }
  p {
    margin-bottom: 5px;
  }
`;
export const ProductName = styled.p`
  font-size: 18px;
`;
