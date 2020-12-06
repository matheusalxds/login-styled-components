import styled, { css } from 'styled-components';

import { getByProperty, mq, space1 } from '../styles';

const desktopMQ = css`
  display: flex;
  background: none;
  left: initial;
  top: initial;
  position: relative;
  width: initial;
  border-bottom: none;
  margin: auto 0 auto auto;
`;

const Menu = styled.nav`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: absolute;
  width: 100%;
  top: 60px;
  left: 0;
  padding: ${space1};
  border-bottom: solid 2px ${getByProperty('theme', 'secondaryColor')};
  background-color: ${getByProperty('theme', 'whiteColor')};

  ${mq('desktop', desktopMQ)}
`;

export { Menu };
