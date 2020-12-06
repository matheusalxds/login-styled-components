import PropTypes from 'prop-types';

import { Content, Header } from '../common';

const PageLayout = ({ children }) => (
  <>
    <Header />
    <Content>{children}</Content>
  </>
);

PageLayout.propTypes = { children: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Object)]) };
PageLayout.defaultProps = { children: null };

export { PageLayout };
