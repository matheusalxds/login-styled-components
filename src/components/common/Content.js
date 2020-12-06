import styled from 'styled-components';

import { space2 } from '../styles';

const Content = styled.main`
  max-width: 800px;
  margin: 80px auto 0 auto;
  padding: 0 ${space2};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: Arial, serif;
  }
`;

export { Content };
