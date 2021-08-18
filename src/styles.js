import styled from 'styled-components';

export const SearchHeader = styled.header`
  display: flex;
  justify-content: space-around;
  background-color: #225264;
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
`;

export const SearchInput = styled.input`
  width: 65%;
  height: 40%;
  border-radius: 7px;
  background-color: #c3c3c3;
  font-weight: 800;
  padding: 7px;
`;

export const AccountDiv = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  > p {
    color: white;
  }
`;

export const SectionTitle = styled.h2`
  text-align: center;
  margin: 15px auto;
`;

export const MostPlayed = styled.div`
  width: 100vw;
  margin: 0;
`;

export const SongsDiv = styled.div`
  display: flex;
  flex-flow: column;
  > h4,
  p {
    text-align: center;
  }
  > div {
    display: flex;
    justify-content: space-around;
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
