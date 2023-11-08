import styled from 'styled-components';

export const HeaderTag = styled.header`
  top: 0;
  position: fixed;
  width: 100%;
`;
export const ContainerBackgroundHeader = styled.div`
  background-color: #232426;
`;
export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 20px 0;
  width: 80%;
  margin: 0 auto;

  img {
    width: 12%;
    cursor: pointer;
  }
`;

export const ContainerBackgroundSubHeader = styled.div`
  background-color: #232426;
`;

export const ContainerSubHeader = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 80%;
  margin: 0 auto;
  padding: 10px;
  a {
    padding: 10px 0;
    text-decoration: none;
    color: ${(props) => (props.active == 1 ? 'green' : 'whitesmoke')};
  }

  /* a[tabindex]:focus {
      color: #d5b773;
      outline: none;
  } */
`;

export const ContainerSearchBar = styled.div`
  height: max-content;
  position: relative;
  display: flex;
  align-items: center;
  background-color: #2e2f31;
  border: 0.5px solid #2f3032;
  border-radius: 10px;
  img {
    width: 20px;
    cursor: pointer;
    margin-right: 4px;
  }
  input {
    width: 250px;
    height: 25px;
    border-radius: 10px;
    outline: 0;
    background-color: #2e2f31;
    border: none;
    color: #d5d7d6;
    padding: 12px;
  }
`;
export const ContainerUserCart = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  img {
    width: 25px;
    cursor: pointer;
  }
`;
