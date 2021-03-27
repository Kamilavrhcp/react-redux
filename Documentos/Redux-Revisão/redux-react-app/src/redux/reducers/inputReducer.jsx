const INPUT_CHANGE = 'INPUT_CHANGE';

const INITIAL_STATE = {
  text: '',
}

const inputReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        text: action.text,
      };
    default:
      return state;
  }
}

export default inputReducer;
