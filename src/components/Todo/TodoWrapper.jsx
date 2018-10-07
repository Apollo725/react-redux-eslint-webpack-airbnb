import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import { ListItem } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import { Row, Col } from 'reactstrap';
import Divider from '@material-ui/core/Divider';
import TodoList from './TodoList';
import { saveKey } from '../../actions';

class TodoWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newclicked: false,
      content: '',
    };
    this.newClick = this.newClick.bind(this);
    this.saveClick = this.saveClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  newClick() {
    this.setState({ newclicked: true });
  }

  saveClick() {
    const { newclicked } = this.state;
    this.props.saveKey(this.state.content);
    this.setState({ newclicked: !newclicked });
  }

  handleChange(e) {
    this.setState({ content: e.target.value });
  }

  render() {
    const { newclicked } = this.state;
    return (
      <TodoContainer>
        <List>
          <Row>
            <ListItem>
              <Col xs={2}>
                <ListItemTextName primary="Name" />
              </Col>
              <Col xs={4}>
                <ListItemTextDiv primary="Key" />
              </Col>
              <Col xs={3}>
                <ListItemTextDiv primary="Date Created" />
              </Col>
              <Col xs={3}>
                <ListItemTextDiv primary="Action" />
              </Col>
            </ListItem>
            <DividerStyled />
          </Row>
          <TodoList />
          {newclicked && (
            <Row>
              <NewListItem>
                <Col xs={2}>
                  <ListItemTextNameInput>
                    <Input
                      defaultValue=""
                      inputProps={{
                        'aria-label': 'Description',
                      }}
                      onChange={this.handleChange}
                      placeholder="Enter name..."
                      maxLe
                    />
                  </ListItemTextNameInput>
                </Col>
                <Col xs={4}>
                  <ListItemTextDiv>
                    <PasswordInput
                      id="adornment-password"
                      type="password"
                      value="This must be private field."
                      readOnly
                      disableUnderline
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton>
                            <Visibility fontSize="small" />
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </ListItemTextDiv>
                </Col>
                <Col xs={3}>
                  <ListItemTextDiv primary="11/06/2018" />
                </Col>
                <Col xs={3}>
                  <ListItemTextDiv>
                    <SaveButton
                      variant="contained"
                      color="primary"
                      size="large"
                      onClick={this.saveClick}
                    >
                      Save
                    </SaveButton>
                  </ListItemTextDiv>
                </Col>
              </NewListItem>
            </Row>
          )}
          <ListItemDiv>
            <NewButton variant="outlined" size="large" color="primary" onClick={this.newClick}>
              New
            </NewButton>
          </ListItemDiv>
        </List>
      </TodoContainer>
    );
  }
}

const TodoContainer = styled.div`
  width: 100%;
  justify-content: center;
  padding-top: 50px;
`;
const ListItemTextDiv = styled(ListItemText)`
  text-align: center;
`;
const ListItemDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
const NewListItem = styled(ListItem)`
  background-color: white;
  border-width: 1px;
  border-color: black;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
`;
const PasswordInput = styled(Input)`
  width: 230px;
  color: #278dd0 !important;
`;
const ListItemTextNameInput = styled(ListItemText)`
  text-align: left;
`;
const ListItemTextName = styled(ListItemText)`
  text-align: left;
`;
const SaveButton = styled(Button)`
  text-transform: capitalize !important;
  background-color: #278dd0 !important;
`;
const NewButton = styled(Button)`
  text-transform: capitalize !important;
  border-color: #278dd0 !important;
  color: #000000 !important;
`;
const DividerStyled = styled(Divider)`
  width: 100%;
`;

function mapStateToProps() {
  return {};
}
function mapDispatchToProps(dispatch) {
  return {
    saveKey: bindActionCreators(saveKey, dispatch),
  };
}
TodoWrapper.propTypes = {
  saveKey: PropTypes.func,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoWrapper);
