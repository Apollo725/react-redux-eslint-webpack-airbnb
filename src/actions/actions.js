import { SAVE_KEY, DELETE_KEY, EDIT_KEY } from '../constants/ActionType';

export function saveKey(name) {
  return {
    type: SAVE_KEY,
    payload: name,
  };
}
export function deleteKey(id) {
  console.log('this is DELETE action');
  return {
    type: DELETE_KEY,
    payload: id,
  };
}
export function editKey(editId, editName) {
  console.log('this is EDIT action');
  return {
    type: EDIT_KEY,
    payload: { id: editId, edit: editName },
  };
}
