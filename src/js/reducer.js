const initialState = {
  items: [],
  formVisible: false
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
    default:
      return state;
  }
};

export default reducer;
