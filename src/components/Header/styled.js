import styled from "styled-components";

export const HeaderTag = styled.header`
  top: 0;
  position: fixed;
  width: 100%;
`;
export const ContainerBackgroundHeader = styled.div`
  background-color: #1c1818;
`;
export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  padding: 40px 0;
  width: 80%;
  margin: 0 auto;
`;

export const ContainerBackgroundSubHeader = styled.div`
  background-color: grey;
`;

export const ContainerSubHeader = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 80%;
  margin: 0 auto;
  a {
    padding: 10px 0;
    text-decoration: none;
    color: aliceblue;
  }
`;

export const ContainerSearchBar = styled.div`
  position: relative;
  img {
    width: 20px;
    position: absolute;
    right: 0;
    cursor: pointer;
  }
`;
