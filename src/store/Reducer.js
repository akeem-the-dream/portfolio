const initialState = {
  Darkmode: true,
};
export const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { Darkmode: !state?.Darkmode };
    default:
      return state;
  }
};
