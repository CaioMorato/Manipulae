import styled from 'styled-components';

export const Footer = styled.footer`
  align-items: center;
  background-color: #fff;
  box-shadow: 1px 1px 11px 2px rgba(0, 0, 0, 0.2);
  display: flex;
  height: 13vh;
  justify-content: space-evenly;
  position: fixed;
  top: 87vh;
  width: 100%;

  > div img {
    border-radius: 7px;
    height: 60px;
    margin: 0;
    width: 60px;
  }

  div:nth-of-type(2) {
    align-items: center;
    display: flex;
    height: 40px;
    justify-content: center;
    width: 40px;
  }

  div:nth-of-type(2):hover {
    background-color: #c3c3c3;
    border-radius: 50%;
  }

  .slider {
    -webkit-appearance: none;
    background-color: black;
    border-radius: 20px;
    height: 9px;
  }

  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: #fff;
    border: 1px solid black;
    border-radius: 7px;
    box-shadow: 1px 1px 6px #000000;
    cursor: pointer;
    height: 22px;
    margin-top: -3.6px;
    width: 14px;
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
  align-items: center;
  border: 1px solid black;
  display: flex;
  flex-flow: row;
  justify-content: space-evenly;
  width: 40%;

  > input {
    width: 90%;
  }
`;
