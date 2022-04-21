import Login from "./Login.js";
import "./App.css";
import { useEffect, useState } from "react";
import { getTokenFromUrl } from "./spotify.js";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player.js";
import { useData } from "./DataContext.js";

const spotify = new SpotifyWebApi();

function App() {
  const { user, token, setUser, setToken, setPlaylists, setDiscoverWeekly } =
    useData();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        setUser(user);

        spotify.getUserPlaylists().then((playlists) => setPlaylists(playlists));
      });

      spotify
        .getPlaylist("37i9dQZEVXcLeFVgdvo73P")
        .then((response) => setDiscoverWeekly(response));
    }
  }, []);

  console.log(token);
  console.log(user);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
