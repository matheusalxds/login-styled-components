import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { space1, radius1, getByProperty } from '../styles';

import { ToggleFormButton } from './Button';

const Input = styled.input`
  width: 100%;
  border: solid 1px ${getByProperty('theme', 'lightGrayColor')};
  padding: ${space1};
  border-radius: ${radius1};
`;

const Wrapper = styled.div`
  display: flex;

  ~ div {
    margin-top: ${space1};
  }
`;

const PasswordInputWrapper = styled(Input).attrs(() => ({
  type: 'password',
  placeholder: 'Password',
}))`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const PasswordInput = ({ name, value, ...otherProps }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  return (
    <>
      <Wrapper>
        <PasswordInputWrapper {...otherProps} name={name} value={value} />
        <ToggleFormButton onClick={() => toggleShowPassword()}>{showPassword ? 'Hide' : 'Show'}</ToggleFormButton>
      </Wrapper>
      <div>{showPassword ? value : ''}</div>
    </>
  );
};

PasswordInput.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
};

PasswordInput.defaultProps = {
  name: 'password',
  value: 'password',
};

export { Input, PasswordInput };
