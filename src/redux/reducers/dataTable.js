const ADD_RECORD = "ADD_RECORD";
const EDIT_RECORD = "EDIT_RECORD";

const initialState = {
  tableData: [
    {
      id: 1,
      breed: "Beagle",
      details:
        "The beagle is a breed of small scent hound, similar in appearance to the much larger foxhound. The beagle was developed primarily for hunting hare (beagling). ",
      available: 55,
    },
    {
      id: 2,
      breed: "Akita",
      details:
        "The Akita is a large breed of dog originating from the mountainous regions of northern Japan.",
      available: 20,
    },

    {
      id: 3,
      breed: "Bloodhound",
      details:
        "The Bloodhound is a large scent hound, originally bred for hunting deer, wild boar and, since the Middle Ages, for tracking people.",
      available: 47,
    },

    {
      id: 4,
      breed: "Cairn Terrier",
      details:
        "The Cairn Terrier is a terrier breed originating in the Scottish Highlands and recognized as one of Scotland's earliest working dogs.",
      available: 10,
    },

    {
      id: 5,
      breed: "Georgian Shepherd",
      details:
        "The Georgian Shepherd, also known as Georgian Mountain Dog, is a breed of guard dog and livestock guardian dog from the Georgian Caucasus.",
      available: 5,
    },
  ],
};

//Action Creator
export const addRecord = (data) => {
  return {
    type: ADD_RECORD,
    data,
  };
};

export const editRecord = (data) => {
  return {
    type: EDIT_RECORD,
    data,
  };
};

//Action Dispatcher
// export const loginCheckDispatch = (data) => (dispatch) => {
//   dispatch(loginCheck(data))
// };

const dataTable = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RECORD:
      return {
        ...state,
        tableData: [
          ...state.tableData,
          { ...action.data, id: state.tableData.length },
        ],
      };

    case EDIT_RECORD:
      const index = state.tableData.findIndex((item) => item.id == action.data.id);
      let temp = state.tableData;
      temp[index] = action.data
      return {
        ...state,
        tableData: [...temp],
      };
    default:
      return { ...state };
  }
};

export default dataTable;
