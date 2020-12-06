import styled, { keyframes } from 'styled-components';

import { getByProperty, space2 } from '../styles';

const rotation = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  height: 30px;
  width: 30px;
  border: solid 1px ${getByProperty('theme', 'primaryColor')};
  border-radius: 50%;
  border-top: none;
  border-right: none;
  margin: ${space2} auto;
  animation: ${rotation} 1s linear infinite;
`;

export { Spinner };
