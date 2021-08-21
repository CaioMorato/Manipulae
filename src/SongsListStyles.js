import styled from 'styled-components';

export const MostPlayed = styled.div`
  background-color: white;
  border-radius: 9px;
  box-shadow: 1px 1px 7px 1px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-flow: row wrap;
  padding: 2%;
`;

export const SongsDiv = styled.div`
  border-radius: 4px;
  border: 1px black solid;
  box-shadow: -2px 2px 5px 3px rgba(0, 0, 0, 0.2);
  padding: 12px;
  margin: 12px auto;
  max-width: 220px;

  > h4,
  p,
  h5 {
    margin: 6px;
    text-align: center;
  }

  > img {
    border: 1px #b1dcd9 solid;
    width: 190px;
  }
`;

export const ButtonsDiv = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;

  > button {
    align-items: center;
    background-color: white;
    border: 1px black solid;
    border-radius: 20px;
    display: flex;
    height: 20px;
    justify-content: center;
    outline: none;
    width: 40px;
  }

  > button:hover {
    cursor: pointer;
    background-color: #b1dcd9;
    transform: scale(1.04);
  }

  .react-fav-icon:hover {
    color: red;
    cursor: pointer;
  }

  .react-fav-icon:active {
    color: red;
    transform: scale(0.9);
  }
`;
