export const initialState = {
  user: null,
};

export const actionTypes = {
  SET_USER: 'SET_USER',
};

// login에서 dispatch를 통해 reducer가 실행되고
// set_user가 전달되면 이전 state에 새로운 user를 저장해서 return함
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
