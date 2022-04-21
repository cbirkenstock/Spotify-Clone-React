import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import useData from "./DataContext";

function Header() {
  const { user } = useData();
  return (
    <div className="header">
      <div className="header_left">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Podcasts"
          type="text"
        />
      </div>
      <div className="header_right">
        <Avatar src={user?.images[0]?.url} alt="RQ" />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
