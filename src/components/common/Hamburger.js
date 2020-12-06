import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { getByProperty, mq, space0, space3 } from '../styles';

const desktopMQ = css`
  display: none;
`;

const isClosedCss = css`
  background-color: transparent;

  &::after {
    transform: rotate(135deg);
    top: 0;
  }

  &::before {
    transform: rotate(-135deg);
    top: 0;
  }
`;

const HamburgerWrapper = styled.button`
  margin: auto 0 auto auto;
  width: ${space3};
  min-width: ${space3};
  padding: ${space0};
  background-color: transparent;
  outline: transparent;

  div {
    transition: all 0.2s ease-in-out;
    position: relative;
    width: 100%;
    height: 2px;
    background-color: ${getByProperty('theme', 'darkTextColor')};

    &::after,
    &::before {
      position: absolute;
      transition: all 0.3s ease-in-out;
      content: '';
      height: 2px;
      width: 100%;
      left: 0;
      background-color: ${getByProperty('theme', 'darkTextColor')};
    }

    &::after {
      top: -6px;
    }

    &::before {
      top: 6px;
    }

    ${({ isClosed }) => (isClosed ? isClosedCss : '')}
  }

  ${mq('desktop', desktopMQ)}
`;

const Hamburger = ({ open, ...otherProps }) => (
  <HamburgerWrapper isClosed={open} {...otherProps}>
    <div />
  </HamburgerWrapper>
);

Hamburger.propTypes = {
  open: PropTypes.bool,
};
Hamburger.defaultProps = {
  open: false,
};

export { Hamburger };
