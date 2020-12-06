import { css } from 'styled-components';

// breakpoints
const DESKTOP = '768px';

const desktop = (styles) => css`
  @media (min-width: ${DESKTOP}) {
    ${styles}
  }
`;

const mq = (type, styles) => {
  const mqs = {
    desktop: desktop(styles),
  };

  return type ? mqs[type] : null;
};

export { mq };
