import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import Main from './Main';

class ApiKey extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col xs="2">
            <Sidebar />
          </Col>
          <Col xs="10">
            <Main />
          </Col>
        </Row>
      </div>
    );
  }
}

export default ApiKey;
