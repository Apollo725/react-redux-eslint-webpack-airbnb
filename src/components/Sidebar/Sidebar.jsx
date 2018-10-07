import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'reactstrap';
import KeyIcon from '@material-ui/icons/VpnKey';
import LogIcon from '@material-ui/icons/FileCopy';
import Divider from '@material-ui/core/Divider';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyclicked: false,
      logclicked: false,
    };
    this.keyClick = this.keyClick.bind(this);
    this.logClick = this.logClick.bind(this);
  }

  keyClick() {
    this.setState({ keyclicked: true, logclicked: false });
  }

  logClick() {
    this.setState({ keyclicked: false, logclicked: true });
  }

  render() {
    const { keyclicked, logclicked } = this.state;
    return (
      <StyledWrapper>
        <StyledRow>
          <Row>
            <Col sm={2}>
              <KeyIconStyled />
            </Col>
            <ColStyled sm={8} primary={keyclicked} onClick={this.keyClick}>
              Keys
            </ColStyled>
          </Row>
          <Row>
            <Col sm={2} />
            <Col sm={8}>{keyclicked && <DividerStyled />}</Col>
          </Row>
        </StyledRow>
        <StyledRow>
          <Row>
            <Col sm={2}>
              <LogIconStyled />
            </Col>
            <ColStyled sm={8} primary={logclicked} onClick={this.logClick}>
              Log
            </ColStyled>
          </Row>
          <Row>
            <Col sm={2} />
            <Col sm={8}>{logclicked && <DividerStyled />}</Col>
          </Row>
        </StyledRow>
      </StyledWrapper>
    );
  }
}
const StyledWrapper = styled.div`
  height: 100vh;
  padding: 10px;
  font-size: 16px;
`;
const StyledRow = styled.div`
  margin-top: 30px;
  margin-left: 20px;
`;
const KeyIconStyled = styled(KeyIcon)`
  color: #b3c3d6 !important;
`;
const LogIconStyled = styled(LogIcon)`
  color: #b3c3d6 !important;
`;
const ColStyled = styled(Col)`
  :hover {
    cursor: pointer;
  }
  color: ${props => (props.primary ? '#000000' : '#b3c3d6')} !important;
`;
const DividerStyled = styled(Divider)`
  width: 35px;
  background-color: #000000 !important;
  height: 5px;
`;
export default Sidebar;
