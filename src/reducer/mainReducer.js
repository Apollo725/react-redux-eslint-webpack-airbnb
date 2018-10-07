import { SAVE_KEY, DELETE_KEY, EDIT_KEY } from '../constants/ActionType';

const initialState = {
  keys: [],
};

export default function reducer(state = initialState, action) {
  const temp = [];
  switch (action.type) {
    case SAVE_KEY:
      console.log('save state', state);
      return Object.assign({}, state, { keys: state.keys.concat(action.payload) });
    case DELETE_KEY:
      return Object.assign({}, state, {
        keys: state.keys.filter((key, index) => index !== action.payload),
      });
    case EDIT_KEY:
      temp.push(...state.keys);
      temp.splice(action.payload.id, 1, action.payload.edit);
      console.log('edit key temp', temp);
      console.log('edit key', state.keys);
      return Object.assign({}, state, {
        keys: temp,
      });
    default:
      return state;
  }
}
