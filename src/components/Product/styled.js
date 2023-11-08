import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  height: max-content;
  margin: 20px auto;
  margin-top: ${(props) =>
    props.index >= 4 && props.index % 6 == 4 ? '-50px' : '0px'};
  background-color: #1e1e1e;
  color: whitesmoke;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  padding-bottom: ${(props) => (props.index % 2 == 0 ? '40px' : '10px')};
  cursor: pointer;
  &:hover {
    box-shadow: 0 14px 28px rgba(225, 225, 225, 0.25),
      0 10px 10px rgba(225, 225, 225, 0.22);
  }
  img {
    width: 100%;
    margin-bottom: ${(props) => (props.index % 2 == 0 ? '20px' : '0px')};
    border-radius: 8px 8px 0 0;
    object-fit: cover;
  }
`;
export const ContainerInfos = styled.div`
  padding: 20px;
  font-family: 'Open Sans', sans-serif;
  /* margin-bottom: ${(props) => (props.index % 2 == 0 ? '100px' : '0px')}; */
  h3 {
    margin: 15px 0 5px 0;
    font-size: 24px;
    font-weight: lighter;
    text-align: center;
    margin-bottom: 20px;
  }
  div {
    p {
      margin-bottom: 5px;
      font-size: 10px;
      text-align: center;
    }
  }
`;
export const ProductName = styled.p`
  font-size: 16px;
  margin-bottom: 30px;
`;
