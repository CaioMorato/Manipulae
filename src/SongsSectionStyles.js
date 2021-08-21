import styled from 'styled-components';

export const Loading = styled.p`
  font-size: ${(props) => props.fontSize || 'larger'};
  margin: auto;
  text-align: center;
`;

export const PageTitle = styled.h1`
  font-family: 'Recursive', sans-serif;
  margin: 23px auto;
  text-align: center;
`;

export const MostPlayedSection = styled.div`
  font-family: 'Recursive', sans-serif;
  margin-bottom: 7%;
  min-height: max-content;
`;
