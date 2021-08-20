import styled from 'styled-components';

export const MostPlayed = styled.div`
  display: flex;
  flex-flow: row wrap;
  box-shadow: 1px 1px 7px 1px rgba(0, 0, 0, 0.2);
  background-color: white;
  border-radius: 9px;
  padding: 2%;
`;

export const SongsDiv = styled.div`
  border-radius: 4px;
  padding: 12px;
  border: 1px black solid;
  box-shadow: -2px 2px 5px 3px rgba(0, 0, 0, 0.2);
  margin: 12px auto;
  max-width: 220px;
  > h4,
  p,
  h5 {
    text-align: center;
    margin: 6px;
  }
  > img {
    border: 1px #b1dcd9 solid;
    width: 190px;
  }
`;

export const ButtonsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

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
    background-color: #b1dcd9;
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
