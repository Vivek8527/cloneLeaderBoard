/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useEffect, useState } from "react";
import { PiMagnifyingGlassThin } from "react-icons/pi";
import "./Navbar.css";
import { FaUserAstronaut } from "react-icons/fa";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "../../config/axios";
import baseUrl from "../../baseUrl";
import userStore from "../../store/userstore";
import { useNavigate } from "react-router-dom";

export function Navbar() {
  const user = userStore((state) => state.user);
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [confirmLogout, setConfirmLogout] = useState(false);

  const handleConfirm = () => {
    setConfirmLogout(true);
  };

  const handleConfirmClose = () => {
    setConfirmLogout(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/", { replace: true });
  };

  return (
    <>
      <nav>
        <div className="search_icon">
          <PiMagnifyingGlassThin />
          <input placeholder="Search"></input>
        </div>
        <div className="container__admin">
          <h1 style={{ color: "#E94B89" }}>{user.leaderName} </h1>
          <div className="admin__icon"></div>

          <div>
            <FaUserAstronaut
              className="admin__icon"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            />
          </div>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
            {/* <MenuItem
              onClick={handleClose}
            >
          
            </MenuItem> */}
            <MenuItem
              style={{ color: "#E94B89" }}
              onClick={() => {
                handleClose();
                handleConfirm();
              }}
            >
              Logout
            </MenuItem>
          </Menu>
        </div>

        <Dialog
          open={confirmLogout}
          onClose={handleConfirmClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <p className="logout_text">LOGOUT</p>
          <DialogTitle id="alert-dialog-title">
            {"Are You Sure You Want To Logout?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description"></DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              style={{
                backgroundColor: "#ea6399",
                fontWeight: "bolder",
                fontSize: "15px",
                borderRadius: "5px",
                color: "white",
              }}
              onClick={handleLogout}
            >
              Yes
            </Button>
            <Button
              style={{
                backgroundColor: "blue",
                fontWeight: "bolder",
                fontSize: "15px",
                borderRadius: "5px",
                color: "white",
              }}
              onClick={handleConfirmClose}
            >
              No
            </Button>
          </DialogActions>
        </Dialog>
      </nav>
    </>
  );
}
