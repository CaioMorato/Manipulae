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
  width: 98vw;
  margin: 20px auto;
  border-radius: 9px;
  font-family: 'Recursive', sans-serif;
  padding: 18px 6px;
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
  /* border: 1px blue solid; */
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
  justify-content: space-around;
  margin-top: 30px;
  border: 1px black solid;
  > img {
    margin: 0;
    width: 50px;
    height: 50px;
  }
`;
