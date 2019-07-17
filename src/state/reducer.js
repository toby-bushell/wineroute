export const reducer = (state, action) => {
  console.log('reucer firing with:', action.type, action);

  switch (action.type) {
    case 'VINEYARDS_UPDATE':
      return {
        ...state,
        vineyards: action.vineyards,
      };
    case 'SINGLE_VINEYARD_UPDATE':
      return {
        ...state,
        singleVineyard: action.singleVineyard,
      };
    case 'ERROR':
      return {
        ...state,
        error: action.message,
      };
    case 'LOG_IN':
      return {
        ...state,
        loggedIn: action.loggedIn,
      };

    default:
      return state;
  }
};
