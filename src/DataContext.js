import { ActionTypes } from "@mui/base";
import { createContext, useReducer, useContext } from "react";
import dataReducer, { initialState } from "./DataReducer";

const dataContext = createContext(initialState);

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  const setUser = (user) => {
    dispatch({
      type: "SET_USER",
      user: user,
    });
  };

  const setToken = (token) => {
    dispatch({
      type: "SET_TOKEN",
      token: token,
    });
  };

  const setPlaylists = (playlists) => {
    dispatch({
      type: "SET_PLAYLISTS",
      playlists: playlists,
    });
  };

  const setDiscoverWeekly = (discover_weekly) => {
    dispatch({
      type: "SET_DISCOVER_WEEKLY",
      discover_weekly: discover_weekly,
    });
  };

  const value = {
    user: state.user,
    token: state.token,
    discover_weekly: state.discover_weekly,
    playlists: state.playlists,
    playing: state.playing,
    item: state.item,
    setUser,
    setToken,
    setPlaylists,
    setDiscoverWeekly,
  };

  return <dataContext.Provider value={value}>{children}</dataContext.Provider>;
};

export const useData = () => {
  const context = useContext(dataContext);

  if (context === undefined) {
    throw new Error("useShop must be used within ShopContext");
  }

  return context;
};

export default useData;
