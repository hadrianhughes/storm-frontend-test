export const changeDone = (id, isDone) => ({
  type: 'CHANGE_DONE',
  id,
  isDone
});

export const setItems = items => ({
  type: 'SET_ITEMS',
  items
});
