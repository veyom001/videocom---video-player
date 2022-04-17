const reducerFunction = (state, action) => {
  const { dislikes } = state;
  switch (action.type) {
    case "SET_CATEGORIES":
      return {
        ...state,
        allCategories: action.payload,
      };
    case "SET_VIDEOS":
      return {
        ...state,
        allVideos: action.payload,
      };
    case "SET_LIKES":
      return {
        ...state,
        likes: action.payload,
      };
    case "ADD_TO_LIKES":
      return {
        ...state,
        likes: action.payload,
      };
    case "REMOVE_FROM_LIKES":
      return {
        ...state,
        likes: action.payload,
      };
    case "ADD_TO_DISLIKES":
      return {
        ...state,
        dislikes: [...dislikes, action.payload],
      };
    case "REMOVE_FROM_DISLIKES":
      return {
        ...state,
        dislikes: dislikes.filter((item) => item._id !== action.payload._id),
      };
    case "SET_WATCHLATER":
      return {
        ...state,
        watchlater: action.payload,
      };
    case "ADD_TO_WATCHLATER":
      return {
        ...state,
        watchlater: action.payload,
      };
    case "REMOVE_FROM_WATCHLATER":
      return {
        ...state,
        watchlater: action.payload,
      };
    case "SET_HISTORY":
      return {
        ...state,
        history: action.payload,
      };
    case "ADD_TO_HISTORY":
      return {
        ...state,
        history: action.payload,
      };
    case "REMOVE_FROM_HISTORY":
      return {
        ...state,
        history: action.payload,
      };
    case "CLEAR_HISTORY":
      return {
        ...state,
        history: action.payload,
      };
    default:
      return { state };
  }
};

export { reducerFunction };
