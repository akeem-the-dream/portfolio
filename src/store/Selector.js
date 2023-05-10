export const mapDispatchToProps = (dispatch) => {
  return {
    toggle: () => dispatch({ type: "TOGGLE" }),
    displayModal: (
      showModal = false,
      description = "",
      imgUrls = "",
      subtitle = "",
      title = "",
      visitUrl = ""
    ) =>
      dispatch({
        type: "DISPLAY_MODAL",
        showModal,
        description,
        imgUrls,
        subtitle,
        title,
        visitUrl,
      }),
  };
};

export const mapStateToProps = (state) => {
  return {
    Darkmode: state?.Darkmode,
    modalInfo: state?.modalInfo,
  };
};
