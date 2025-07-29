const initialState = {
  Darkmode: localStorage.getItem('Darkmode') === 'light' ? false : true || true,
  modalInfo: {
    showModal: false,
    description: '',
    imgUrls: '',
    subtitle: '',
    title: '',
    visitUrl: '',
  },
};
export const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return { ...state, Darkmode: !state?.Darkmode };
    case 'DISPLAY_MODAL':
      return {
        ...state,
        modalInfo: {
          showModal: action?.showModal,
          description: action?.description,
          imgUrls: action?.imgUrls,
          title: action?.title,
          subtitle: action?.subtitle,
          visitUrl: action?.visitUrl,
        },
      };
    default:
      return state;
  }
};
