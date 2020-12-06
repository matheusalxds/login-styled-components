import styled, { css } from 'styled-components';

import { getByProperty, space1, space2, radius1, fontLg, fontMd } from '../styles';

const lgSize = css`
  padding: ${space2};
  font-size: ${fontLg};
`;

const mdSize = css`
  padding: ${space1};
  font-size: ${fontMd};
`;

const Button = styled.button`
  color: ${getByProperty('theme', 'whiteColor')};
  font-weight: bold;
  box-shadow: none;
  font-size: 1em;
  border: none;
  border-radius: ${radius1};
  width: 100%;
  display: block;
  white-space: unset;
  background: ${({ secondary }) =>
    secondary ? getByProperty('theme', 'secondaryColor') : getByProperty('theme', 'primaryColor')};
  ${({ lg }) => (lg ? lgSize : mdSize)};

  &:disabled {
    background-color: ${getByProperty('theme', 'whiteColor')};
    color: ${getByProperty('theme', 'darkGrayColor')};
  }
`;

const ToggleFormButton = styled.button.attrs(() => ({
  type: 'button',
}))`
  border: 1px solid ${getByProperty('theme', 'lightGrayColor')};
  font-size: ${fontMd};
  display: flex;
  padding: ${space1};
  border-left: 0;
  background-color: ${getByProperty('theme', 'whiteColor')};
  border-top-right-radius: ${radius1};
  border-bottom-right-radius: ${radius1};
  cursor: pointer;
  user-select: none;
`;

export { Button, ToggleFormButton };
