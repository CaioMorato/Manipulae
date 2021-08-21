import styled from 'styled-components';

export const Loading = styled.p`
  text-align: center;
  font-size: ${(props) => props.fontSize || 'larger'};
  margin: auto;
`;

export const PageTitle = styled.h1`
  text-align: center;
  margin: 23px auto;
  font-family: 'Recursive', sans-serif;
`;

export const MostPlayedSection = styled.div`
  font-family: 'Recursive', sans-serif;
  min-height: max-content;
  margin-bottom: 7%;
`;
