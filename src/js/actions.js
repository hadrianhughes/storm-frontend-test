export const changeDone = (id, isDone) => ({
  type: 'CHANGE_DONE',
  id,
  isDone
});

export const setItems = items => ({
  type: 'SET_ITEMS',
  items
});

export const setFormOpen = open => ({
  type: 'SET_FORM_OPEN',
  open
});
