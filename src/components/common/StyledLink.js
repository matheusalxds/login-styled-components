import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link as RRDLink } from 'react-router-dom';

import { space0, space1, getByProperty } from '../styles';

const Link = ({ isActive, children, ...otherProps }) => <RRDLink {...otherProps}>{children}</RRDLink>;

const StyledLink = styled(Link)`
  padding: ${space0} ${space1};
  display: block;
  text-align: center;
  margin: auto 0;
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
  color: ${getByProperty('theme', 'darkTextColor')};
`;

Link.propTypes = {
  isActive: PropTypes.bool,
  children: PropTypes.string,
};
Link.defaultProps = {
  isActive: false,
  children: null,
};

export { StyledLink };
