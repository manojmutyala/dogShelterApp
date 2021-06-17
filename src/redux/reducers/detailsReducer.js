const SET_DETAILS_PAGE_DATA = "SET_DETAILS_PAGE_DATA";

const initialState = {
  breed: "",
  details: "",
  available: 0,
};

//Action Creator
export const setDetailsPageData = (data) => {
  return {
    type: SET_DETAILS_PAGE_DATA,
    data,
  };
};

//Action Dispatcher
// export const loginCheckDispatch = (data) => (dispatch) => {
//   dispatch(loginCheck(data))
// };

const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DETAILS_PAGE_DATA:
      return {
        ...state,
        ...action.data
      };
    default:
      return { ...state };
  }
};

export default detailsReducer;
