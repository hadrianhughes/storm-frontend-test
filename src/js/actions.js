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

export const setFormValue = value => ({
  type: 'SET_FORM_VALUE',
  value
});

export const setFormImportance = value => ({
  type: 'SET_FORM_IMPORTANCE',
  value
});

export const addItem = newItem => ({
  type: 'ADD_ITEM',
  newItem
});

export const setLoading = value => ({
  type: 'SET_LOADING',
  value
});
