import styled from 'styled-components';
import PropTypes from 'prop-types';

import { getByProperty } from '../styles';

const ToggleWrapper = styled.button`
  width: 50px;
  min-width: 50px;
  height: 22px;
  border-radius: 22px;
  border: solid 2px ${getByProperty('theme', 'grayColor')};
  margin: auto;
  display: flex;
  background-image: linear-gradient(
    to right,
    ${getByProperty('theme', 'primaryColor')},
    ${getByProperty('theme', 'secondaryColor')}
  );
`;

const Notch = styled.div`
  height: 18px;
  width: 18px;
  border: solid 2px ${getByProperty('theme', 'grayColor')};
  background: white;
  border-radius: 50%;
  transition: transform 0.1s linear;
  transform: translate(${({ isActive }) => (isActive ? '29px' : '-1px')});
`;

const Toggle = ({ isActive, onToggle }) => (
  <ToggleWrapper onClick={() => onToggle()}>
    <Notch isActive={isActive} />
  </ToggleWrapper>
);

Toggle.propTypes = {
  isActive: PropTypes.bool,
  onToggle: PropTypes.func,
};

Toggle.defaultProps = {
  isActive: false,
  onToggle: (f) => f,
};

export { Toggle };
