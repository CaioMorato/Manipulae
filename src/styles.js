import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #fff;
  position: fixed;
  width: 100%;
  height: 13vh;
  top: 87vh;
  box-shadow: 1px 1px 11px 2px rgba(0, 0, 0, 0.2);

  > div img {
    margin: 0;
    width: 60px;
    height: 60px;
    border-radius: 7px;
  }

  div:nth-of-type(2) {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div:nth-of-type(2):hover {
    background-color: #c3c3c3;
    border-radius: 50%;
  }

  .slider {
    -webkit-appearance: none;
    border-radius: 20px;
    height: 9px;
    background-color: black;
  }

  .slider::-webkit-slider-thumb {
    box-shadow: 1px 1px 6px #000000;
    border: 1px solid black;
    height: 22px;
    width: 14px;
    border-radius: 7px;
    background: #fff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -3.6px;
  }

  .react-fav-icon:hover {
    color: red;
    cursor: pointer;
  }

  .react-fav-icon:active {
    transform: scale(0.9);
    color: red;
  }
`;

export const ProgressBarDiv = styled.div`
  display: flex;
  flex-flow: column;
  width: 30%;
`;

export const PaginationUL = styled.ul`
  display: flex;
  list-style-type: none;
  margin: auto;
  width: max-content;
  /* box-shadow: 1px 1px 7px 1px rgba(0, 0, 0, 0.2); */
  /* background-color: white; */
  border-radius: 9px;
  padding: 2%;

  li + li {
    margin-left: 1rem;
    color: blue;
  }

  .current-index {
    background: none;
    font-weight: bold;
    border: none;
    font-size: 25px;
    text-decoration: underline;
  }
`;

export const PaginationLI = styled.li`
  button {
    background-color: rgb(255, 255, 255, 0);
    border: none;
    outline: none;
    font-size: 20px;
  }
`;

export const NotFoundDIV = styled.div`
  text-align: center;

  > a {
    font-size: x-large;
    color: black;
  }
`;
