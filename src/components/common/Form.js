import styled from 'styled-components';

import { space1, space2, space5, radius1, getByProperty } from '../styles';

import { Button } from './Button';

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background-color: ${getByProperty('theme', 'whiteColor')};
  border: 1px solid ${getByProperty('theme', 'borderColor')};
  padding: ${space2};
  color: ${getByProperty('theme', 'whiteColor')};
  border-radius: ${radius1};

  input + div {
    margin-top: ${space1};
  }

  .alt-text {
    text-align: center;
    margin: ${space1} 0;
    color: ${getByProperty('theme', 'darkTextColor')};
  }

  ${Button}:first-of-type {
    margin-top: ${space5};
  }
`;

export { Form };
