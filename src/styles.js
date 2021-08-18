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
`;

export const MostPlayed = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  border: 1px black solid;
  height: max-content;
  width: 90vw;
`;

export const SongsDiv = styled.div`
  margin: 20px;
  border: 1px black solid;
  width: 122px;
`;
