const initialState = {
  loading: true,
  items: [],
  formOpen: false,
  formValue: '',
  formImportance: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.value };
    case 'CHANGE_DONE':
      return {
        ...state,
        items: state.items.reduce((acc, item) => [ ...acc, item.id === action.id ?
          { ...item, isDone: String(action.isDone) }
          : item
        ], [])
      };
    case 'SET_ITEMS':
      return {
        ...state,
        items: action.items,
        loading: false
      };
    case 'SET_FORM_OPEN':
      return { ...state, formOpen: action.open };
    case 'SET_FORM_VALUE':
      return { ...state, formValue: action.value };
    case 'SET_FORM_IMPORTANCE':
      return { ...state, formImportance: action.value };
    case 'ADD_ITEM':
      return {
        ...state,
        items: [ ...state.items, action.newItem ],
        formValue: '',
        formOpen: false
      };
    case 'DELETE_ITEM':
      return { ...state, items: state.items.reduce((acc, item) =>
        item.id === action.id ?
          acc : [ ...acc, item ], [])
      };
    default:
      return state;
  }
};

export default reducer;
