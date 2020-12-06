import { useState, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { useLocation } from 'react-router-dom';

import { space2, themes, getByProperty } from '../styles';

import { Hamburger } from './Hamburger';
import { Menu } from './Menu';
import { Toggle } from './Toggle';
import { StyledLink } from './StyledLink';

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  display: flex;
  padding: 0 ${space2};
  position: fixed;
  top: 0;
  background-image: linear-gradient(
    to right,
    ${getByProperty('theme', 'primaryColor')},
    ${getByProperty('theme', 'secondaryColor')}
  );
  border-bottom: solid 2px ${getByProperty('theme', 'secondaryColor')};
`;

const isRoute = (route) => {
  const { pathname } = useLocation();

  return pathname === route;
};

const Header = () => {
  const [openMenu, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((open) => !open);

  const { id, setTheme } = useContext(ThemeContext);

  return (
    <HeaderWrapper>
      <Hamburger open={openMenu} onClick={() => toggleMenu()} />
      <Menu open={openMenu}>
        <StyledLink to="/" isActive={isRoute('/')}>
          Home
        </StyledLink>
        <StyledLink to="/login" isActive={isRoute('/login')}>
          Login
        </StyledLink>
        <Toggle isActive={id === themes.draculaTheme.id} onToggle={setTheme} />
      </Menu>
    </HeaderWrapper>
  );
};

export { Header };
