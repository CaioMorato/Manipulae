import styled from 'styled-components';

export const SearchHeader = styled.header`
  background-color: white;
  box-shadow: 1px 1px 7px 2px rgba(0, 0, 0, 0.2);
  display: flex;
  font-family: 'Roboto', sans-serif;
  justify-content: space-around;

  a {
    color: black;
    text-decoration: none;
  }
`;

export const HeaderImgDiv = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const SearchInputContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 50%;

  > img {
    height: 24px;
    left: 32px;
    position: relative;
  }

  > button {
    background-color: white;
    border: none;
    font-size: 20px;
    margin: 0 0 0 10px;
    width: 10%;
  }

  > button:hover {
    cursor: pointer;
  }

  > button:active {
    font-size: 19px;
  }
`;

export const SearchInput = styled.input`
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  height: 40%;
  outline: none;
  padding: 0 0 0 34px;
  width: 55%;
`;

export const AccountDiv = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column;
  justify-content: center;
  
  > p {
    margin: 7px auto;
  }
`;
