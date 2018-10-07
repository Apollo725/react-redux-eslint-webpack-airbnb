import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'reactstrap';
import Todo from '../../components/Todo';
import images from '../../assets/imgs/images.jpg';

class Main extends Component {
  render() {
    return (
      <MainWrapper>
        <Row>
          <DivNotification>
            <Col xs="1">
              <NotificationImg src={images} alt="" />
            </Col>
            <NotificationContent xs="11">
              <span>
                These API key grants developers the ability to access electrica services in the
                Cloud. Keep them confirmed.
              </span>
            </NotificationContent>
          </DivNotification>
        </Row>
        <Row>
          <Todo />
        </Row>
      </MainWrapper>
    );
  }
}
const MainWrapper = styled.div`
  height: 100vh;
  padding: 100px;
  font-size: 16px;
  background: #f9fafc;
`;
const DivNotification = styled.div`
  width: 100%;
  display: flex;
  padding: 10px;
  background-color: white;
  border-width: 1px;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgb(0, 0, 0, 0.3);
`;
const NotificationImg = styled.img`
  height: 40px;
  width: 40px;
`;
const NotificationContent = styled.div`
  height: 100%,
  width: 100%;
  display: flex;
  justify-content: cetner;
  align-items: center;
`;

export default Main;
