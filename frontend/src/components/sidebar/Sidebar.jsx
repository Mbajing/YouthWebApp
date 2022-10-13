import React from "react";
import "./sidebar.css";
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import EventIcon from '@mui/icons-material/Event';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import LogoutIcon from '@mui/icons-material/Logout';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">BBCYSD</span>
      </div>
      <hr/>
      <div className="center">
        <ul>
          <li>
            <PersonIcon className="icon"/>
            <span>Youths</span>
          </li>
          <li>
            <AccountBalanceWalletIcon className="icon"/>
            <span>Finance</span>
          </li>
          <li>
            <LeaderboardIcon className="icon"/>
            <span>Attendance</span>
          </li>
          <li>
            <EventIcon className="icon"/>
            <span>Events</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <ul>
        <li className="mode">
          <span>
          <DarkModeIcon className="icon"/>
          <span>Dark </span>
          </span>

          <span>
          <WbSunnyIcon className="icon"/>
          <span>Light</span>
          </span>

            </li>
       
       
       <li>
        
       <LogoutIcon className="icon"/>
         <span>Logout</span>
         </li> 
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
