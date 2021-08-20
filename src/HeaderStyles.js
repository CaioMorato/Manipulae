import styled from 'styled-components';

export const SearchHeader = styled.header`
  display: flex;
  justify-content: space-around;
  font-family: 'Roboto', sans-serif;
  box-shadow: 1px 1px 7px 2px rgba(0, 0, 0, 0.2);
  background-color: white;
  a {
    text-decoration: none;
    color: black;
  }
`;

export const HeaderImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchInputContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    position: relative;
    left: 32px;
    height: 24px;
  }

  > button {
    background-color: white;
    font-size: 20px;
    width: 10%;
    border: none;
    margin: 0 0 0 10px;
  }

  > button:hover {
    cursor: pointer;
  }

  > button:active {
    font-size: 19px;
  }
`;

export const SearchInput = styled.input`
  width: 55%;
  height: 40%;
  border-radius: 10px;
  padding: 0 0 0 34px;
  outline: none;
  font-weight: 600;
  font-size: 15px;
`;

export const AccountDiv = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  > p {
    margin: 7px auto;
  }
`;
