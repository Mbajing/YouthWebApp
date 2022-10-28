import React from "react";
import "./sidebar.css";
import PersonIcon from "@mui/icons-material/Person";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import EventIcon from "@mui/icons-material/Event";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import LogoutIcon from "@mui/icons-material/Logout";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  let navigate = useNavigate();
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">BBCYSD</span>
      </div>
      <hr />
      <div className="center">
       
          <div onClick={() => navigate("/")} className={window.location.pathname === '/' ? "active":""}>
            <PersonIcon className="icon" />
            <span className="text">Youths</span>
          </div>
          <div onClick={() => navigate("/finance")} className={window.location.pathname === '/finance' ? "active":""}>
            <AccountBalanceWalletIcon className="icon" />
            <span className="text">Finance</span>
          </div>
          <div onClick={() => navigate("/attendance")} className={window.location.pathname === '/attendance' ? "active":""}>
            <LeaderboardIcon className="icon" />
            <span className="text">Attendance</span>
          </div>
          <div onClick={() => navigate("/event")} className={window.location.pathname === '/event' ? "active":""}>
            <EventIcon className="icon" />
            <span className="text">Events</span>
          </div>
        
      </div>
      <div className="middle">
        //dark or light mode
          <div className="mode">
            <div className="mode__light" >
              <DarkModeIcon className="icon" />
              <span className="text">Dark </span>
            </div>

            <div className="mode__dark">
              <WbSunnyIcon className="icon" />
              <span className="text">Light</span>
            </div>
          </div>

        
      </div>
      <div className="bottom">
        
      <div>
            <LogoutIcon className="icon" />
            <span className="text">Logout</span>
          </div>
      </div>
    </div>
  );
}

export default Sidebar;
