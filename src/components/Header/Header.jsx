import React from 'react';
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
import Avatar from '@material-ui/core/Avatar';
import styled from 'styled-components';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/imgs/logo.png';
import avatar from '../../assets/imgs/myAvatar.png';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      value: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  toggle() {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  }

  handleChange(event, value) {
    this.setState({ value });
  }

  render() {
    const { isOpen, value } = this.state;
    return (
      <Headerbar expand="md">
        <Headerbrand href="/">
          <StyledImg src={logo} alt="" />
          &nbsp; electrica.io
        </Headerbrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItemList>
              <Tabs value={value} indicatorColor="primary" onChange={this.handleChange}>
                <Tab label="HOME" />
                <Tab label="API KEYS" />
                <Tab label="STL HUB" />
                <Tab label="MONITOR" />
                <Tab label="Item Two" />
                <Tab label="NOTIFICATIONS" />
              </Tabs>
            </NavItemList>
            <NavItem>
              <RightBrand href="/">electrica.io</RightBrand>
            </NavItem>
            <NavItem>
              <Avatar alt="Remy Sharp" src={avatar} />
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownArrow nav caret />
              <DropdownMenu right>
                <DropdownItem>
                  <FontAwesomeIconStyled icon="user-circle" />
                  <DropMenu> Profile</DropMenu>
                </DropdownItem>
                <DropdownItem>
                  <FontAwesomeIconStyled icon="user-alt" />
                  <DropMenu>Account</DropMenu>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <FontAwesomeIconStyled icon="sign-out-alt" />
                  <DropMenu>Logout</DropMenu>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Headerbar>
    );
  }
}

const StyledImg = styled.img`
  width: 50px;
  height: 50px;
`;
const Headerbar = styled(Navbar)`
  background-color: #278dd0;
  color: white !important;
`;
const Headerbrand = styled(NavbarBrand)`
  margin-left: 30px;
  color: white !important;
  font-size: 14px;
`;
const DropdownArrow = styled(DropdownToggle)`
  color: white !important;
`;
const NavItemList = styled(NavItem)`
  margin-right: 100px;
`;
const RightBrand = styled(NavLink)`
  color: white !important;
`;
const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
  margin-right: 15px;
`;
const DropMenu = styled.span`
  font-size: 14px;
`;

export default Header;
