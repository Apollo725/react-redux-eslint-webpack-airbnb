import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import { ListItem } from '@material-ui/core';
import styled from 'styled-components';
import ListItemText from '@material-ui/core/ListItemText';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import Divider from '@material-ui/core/Divider';
import { deleteKey, editKey } from '../../actions';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editContent: '',
      id: null,
      editable: false,
    };
    this.deleteClick = this.deleteClick.bind(this);
    this.editClick = this.editClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.editSaveClick = this.editSaveClick.bind(this);
  }

  deleteClick(deleteId) {
    this.props.deleteKey(deleteId);
  }

  editClick(editId) {
    this.setState({ editable: true, id: editId });
  }

  handleChange(e) {
    this.setState({ editContent: e.target.value });
  }

  editSaveClick(editId) {
    const { editContent } = this.state;
    this.setState({ editable: false });
    this.props.editKey(editId, editContent);
  }

  render() {
    const { keys } = this.props;
    const { id, editable } = this.state;
    console.log('component keys', keys);
    return (
      <List>
        {keys.keys
          ? keys.keys.map((key, index) => (
              <Row key={index.toString()}>
                <ListItem key={index.toString()}>
                  <Col xs={2}>
                    {editable && index === id ? (
                      <ListItemText>
                        <Input
                          defaultValue={key}
                          inputProps={{
                            'aria-label': 'Description',
                          }}
                          onChange={this.handleChange}
                          placeholder="Enter name..."
                        />
                      </ListItemText>
                    ) : (
                      <ListItemText>{key}</ListItemText>
                    )}
                  </Col>
                  <Col xs={4}>
                    <ListItemTextCenter>
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
                    </ListItemTextCenter>
                  </Col>
                  <Col xs={3}>
                    <ListItemTextCenter primary="11/06/2018" />
                  </Col>
                  <Col xs={3}>
                    {editable && index === id ? (
                      <ListItemTextCenter>
                        <SaveButton
                          variant="contained"
                          color="primary"
                          size="large"
                          onClick={() => this.editSaveClick(index)}
                        >
                          Save
                        </SaveButton>
                      </ListItemTextCenter>
                    ) : (
                      <ListItemTextCenter>
                        <RefreshButton size="small" onClick={() => this.editClick(index)}>
                          Refresh
                        </RefreshButton>
                        <DeleteButton size="small" onClick={() => this.deleteClick(index)}>
                          Delete
                        </DeleteButton>
                      </ListItemTextCenter>
                    )}
                  </Col>
                </ListItem>
                <DividerStyled />
              </Row>
            ))
          : null}
      </List>
    );
  }
}

const PasswordInput = styled(Input)`
  width: 230px;
  color: #278dd0 !important;
`;
const ListItemTextCenter = styled(ListItemText)`
  text-align: center;
`;
const RefreshButton = styled(Button)`
  text-transform: capitalize !important;
  :hover {
    background-color: transparent !important;
  }
  color: #69c69a !important;
  font-size: 16px !important;
`;
const DeleteButton = styled(Button)`
  text-transform: capitalize !important;
  :hover {
    background-color: transparent !important;
  }
  color: #278dd0 !important;
  font-size: 16px !important;
`;
const SaveButton = styled(Button)`
  text-transform: capitalize !important;
  background-color: #278dd0 !important;
`;
const DividerStyled = styled(Divider)`
  width: 100%;
`;

function mapStateToProps(state) {
  return {
    keys: state.mainReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    deleteKey: bindActionCreators(deleteKey, dispatch),
    editKey: bindActionCreators(editKey, dispatch),
  };
}
TodoList.propTypes = {
  keys: PropTypes.object,
  deleteKey: PropTypes.func,
  editKey: PropTypes.func,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
