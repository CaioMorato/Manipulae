import styled from 'styled-components';

export const PaginationUL = styled.ul`
  display: flex;
  list-style-type: none;
  margin: auto;
  width: max-content;
  border-radius: 9px;
  padding: 2%;

  li + li {
    margin-left: 1rem;
    color: blue;
  }

  .current-index {
    background: none;
    font-weight: bold;
    border: none;
    font-size: 25px;
    text-decoration: underline;
  }
`;

export const PaginationLI = styled.li`
  button {
    background-color: rgb(255, 255, 255, 0);
    border: none;
    outline: none;
    font-size: 20px;
  }
`;
