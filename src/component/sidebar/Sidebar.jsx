import "./sidebar.scss";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import { Link } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SummarizeIcon from '@mui/icons-material/Summarize';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LanIcon from '@mui/icons-material/Lan';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ArticleIcon from '@mui/icons-material/Article';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Sidebar = () => {
  return (
    <div className="sidebar">
      
      <div className="center">
        <ul>
          <Link to="/logout" style={{ textDecoration: "none", color:"gray" }}>
          <li>
            <LogoutIcon className="icons" />
            <span>Log out</span>
          </li>
          <Link to="/help" style={{ textDecoration: "none", color:"gray" }}>
          <li>
            <HelpOutlineIcon className="icon" />
            <span>Help</span>
          </li>
          </Link>

          </Link>
          
          <Link to="/admin" style={{ textDecoration: "none",color:"gray" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>System Administration</span>
            </li>
          </Link>
          <Link to="/mail" style={{ textDecoration: "none", color:"gray" }}>
            <li>
              <MailOutlineIcon className="icon" />
              <span>Mailbox</span>
            </li>
          </Link> 
          
             <Link to="/access" style={{ textDecoration: "none", color:"gray" }}>
          <li>
            <SummarizeIcon className="icon" />
            <span>Dynamic Reports</span>
          </li>

             </Link>
              <Link to="/access" style={{ textDecoration: "none", color:"gray" }}>
          <li>
            <DisplaySettingsIcon className="icon" />
            <span>Display Access</span>
          </li>

              </Link>
               <Link to="/calender" style={{ textDecoration: "none",color:"gray" }}>
          <li>
            <CalendarMonthIcon className="icon" />
            <span>Calender</span>
          </li>

               </Link>
               <Link to="/network" style={{ textDecoration: "none",color:"gray" }}>
          <li>
            <LanIcon className="icon" />
            <span>View Network</span>
          </li>

               </Link>
          
          <Link to="/dashboard" style={{ textDecoration: "none",color:"gray" }}>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          </Link>
          <Link to="/documents" style={{ textDecoration: "none",color:"gray" }}>
          <li>
            <ArticleIcon className="icon" />
            <span>Our Documents</span>
          </li>
          </Link>
          <Link to="/settings" style={{ textDecoration: "none",color:"gray" }}>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          </Link>
          
          <Link to="/party" style={{ textDecoration: "none",color:"gray" }}>
          <li>
            <CoPresentIcon className="icon" />
            <span>Third Party Management</span>
          </li>
          </Link>
          <Link to="/form" style={{ textDecoration: "none",color:"gray" }}>
          <li>
            <PlayArrowIcon className="icon" />
            <span>Form Applications</span>
          </li>

          </Link>
        </ul>
      </div>
      
    </div>
  );
};
export default Sidebar;