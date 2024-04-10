const initialState = {
  loading: false,
  data: null,

};


export const auth = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP":
      return { ...state };
    case "SIGNIN":
      console.log("action", action);
      return { ...state,loading: false,
        data: action?.payload.result,
      user:action?.payload?.user};
    case "LOGOUT":
      return {...initialState };
    default:
      return state;
  }
};
