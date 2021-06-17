const LOGIN_SUBMIT = "LOGIN_SUBMIT";
const initialState = {
  username: "",
  password: "",
  isUserLogged: false
};

//Action Creator
export const loginCheck = (data) => {
  return {
    type: LOGIN_SUBMIT,
    data,
  };
};

//Action Dispatcher
export const loginCheckDispatch = (data) => (dispatch) => {
  dispatch(loginCheck(data))
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUBMIT:
      return {
        ...state,
        isUserLogged: true,
        ...action.data,
      };
    default:
      return { ...state };
  }
};

export default loginReducer;
