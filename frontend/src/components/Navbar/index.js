import React, { useState } from 'react';
import {
  Navbar,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import PropTypes from "prop-types";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import logo from './logo.png';
import './styles.css';

export default function Header(props) {
  const [isOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!isOpen);

  return (
    <div>
      <Navbar color="faded" light>
        <img src={logo} style={{width: '4.3rem'}} alt=''/>
        <ButtonDropdown
          isOpen={isOpen}
          toggle={toggle}
          >
          <DropdownToggle
            caret size="lg"
            style={{
              backgroundColor: 'transparent',
              borderColor: 'transparent'
            }}>
            <AccountCircleIcon
              style={{
                color: '#5EB837',
                width: '2em',
                height: '2em'
              }}/>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </Navbar>
    </div>
  );
}

Header.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object),
  handleDrawerToggle: PropTypes.func,
  open: PropTypes.bool,
};
