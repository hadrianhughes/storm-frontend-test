const initialState = {
  items: [],
  formOpen: false,
  formValue: '',
  formImportance: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_DONE':
      const { items } = state;

      return {
        ...state,
        items: items.reduce((acc, item) => [ ...acc, item.id === action.id ?
          { ...item, isDone: String(action.isDone) }
          : item
        ], [])
      };
    case 'SET_ITEMS':
      return { ...state, items: action.items };
    case 'SET_FORM_OPEN':
      return { ...state, formOpen: action.open };
    case 'SET_FORM_VALUE':
      return { ...state, formValue: action.value };
    case 'SET_FORM_IMPORTANCE':
      return { ...state, formImportance: action.value };
    default:
      return state;
  }
};

export default reducer;
