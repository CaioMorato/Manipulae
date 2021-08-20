import styled from 'styled-components';

export const SearchHeader = styled.header`
  display: flex;
  justify-content: space-around;
  font-family: 'Roboto', sans-serif;
`;

export const HeaderDiv = styled.div`
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
`;

export const SearchInput = styled.input`
  width: 56%;
  height: 40%;
  border-radius: 7px;
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

export const MostPlayedSection = styled.div`
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  margin: 20px auto;
  border-radius: 9px;
  font-family: 'Recursive', sans-serif;
  padding: 18px 6px;
  height: 113vh;
`;

export const SectionTitle = styled.h2`
  text-align: center;
  margin: 10px auto;
`;

export const MostPlayed = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
`;

export const SongsDiv = styled.div`
  border-radius: 8px;
  padding: 5px;
  box-shadow: -2px 2px 5px 3px rgba(0, 0, 0, 0.2);
  margin: auto auto 20px;
  > div {
    display: flex;
    justify-content: space-between;
  }

  > h4,
  p {
    text-align: center;
  }
`;

export const ButtonsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around !important  ;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    border-radius: 20px;
    height: 20px;
    background-color: white;
    outline: none;
    border: 1px black solid;
  }

  > button:hover {
    cursor: pointer;
    transform: scale(1.04);
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #fff;
  position: fixed;
  width: 99vw;
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

  li + li {
    margin-left: 1rem;
  }

  .current-index {
    background: none;
    font-weight: bold;
    border: none;
  }
`;
