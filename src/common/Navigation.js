import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

function Navigation(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="mb-3">
      <Navbar color="dark" dark expand="xs">
        <NavbarBrand href="/">
          Teen Budgets
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="container-fluid" navbar>
            <NavItem>
              <NavLink tag={RRNavLink} to='/'>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to='/expenses'>Expenses</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to='/accounts'>Account Setup</NavLink>
            </NavItem>
            <NavItem className="ms-auto" tag="nav">
            <UncontrolledDropdown nav>
              <DropdownToggle caret>
                <i className="fa fa-solid fa-user" />&nbsp; Sammy Spends
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>Profile</DropdownItem>
                <DropdownItem>Settings</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Sign Out</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;