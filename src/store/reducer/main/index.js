import { UPDATE_USER, UPDATE_ERROR, SET_LOADING } from "../../type";

const initialState = {
  user: {
    name: "",
    familyName: "",
    birthday: null,
    gender: "Male",
  },

  isLoading: false,
  error: "",
};

const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER: {
      const { user } = action.payload;
      return {
        ...state,
        user: {
          ...state.user,
          ...user,
        },
      };
    }

    case UPDATE_ERROR: {
      const { error } = action.payload;
      return {
        ...state,
        error,
      };
    }

    case SET_LOADING: {
      const { isLoading } = action.payload;
      return {
        ...state,
        isLoading,
      };
    }

    default:
      return state;
  }
};

export default MainReducer;
