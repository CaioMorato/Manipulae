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
  margin: 15px;
  width: 122px;
  align-items: center;
  justify-content: center;
`;
