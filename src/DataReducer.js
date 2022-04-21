export const initialState = {
  user: null,
  token: null,
  playlists: [],
  discover_weekly: null,
  playing: false,
  item: null,
};

const dataReducer = (state, action) => {
  const { type } = action;

  switch (type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      throw new Error(`No case for type ${type} found in shopReducer.`);
  }
};

export default dataReducer;
