
export const mapDispatchToProps = (dispatch) => {
  return {
    toggle: () => dispatch({ type: "TOGGLE" }),
  };
};

export const mapStateToProps = (state) => {
  return { Darkmode: state?.Darkmode };
};
