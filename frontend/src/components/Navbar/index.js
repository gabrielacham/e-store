import React from 'react';
import {
  Navbar,
} from 'reactstrap';
import PropTypes from "prop-types";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import logo from './logo.png';

export default function Header(props) {
  return (
    <div>
      <Navbar color="faded" light>
        <img src={logo} style={{width: '4.3rem'}} alt=''/>
        <AccountCircleIcon style={{ color: '#5EB837', width: '2em', height: '2em' }} />
      </Navbar>
    </div>
  );
}

Header.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object),
  handleDrawerToggle: PropTypes.func,
  open: PropTypes.bool,
};
