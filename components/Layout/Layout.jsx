import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import history from '../../core/history';
import Header from './Header';
import Sidebar from '../Sidebar/Sidebar';
import Footer from './Footer';
import s from './Layout.css';

class Layout extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    sidebarToggle: PropTypes.bool,
    version: PropTypes.string,
    children: PropTypes.any,
  };

  render() {
    const { sidebarToggle, version, children } = this.props;
    return (
      <section className={cx(s.container, sidebarToggle ? null : s['hide-sidebar'])}>
        <Header />
        <Sidebar />
        {children}
        <Footer version={version} />
      </section>
    );
  }
}

function mapStateToProps(state) {
  const { sidebarToggle, webuiVersionUpdate, jmmVersion } = state;

  if (webuiVersionUpdate.status === true) {
    history.go({
      pathname: '/',
    });
  }
  return {
    sidebarToggle,
    version: jmmVersion.version,
  };
}

export default connect(mapStateToProps)(Layout);