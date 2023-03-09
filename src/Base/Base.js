import {
  AppBar,
  Avatar,
  Badge,
  Button,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./Base.css";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

export default function ({ children }) {
  return (
    <div className="main-component">
      <Grid container>
        <Grid item xs={2}>
          <Box className='side-bar'>
            <AppBar
              position="sticky"
              sx={{ backgroundColor: "rgb(49, 49, 225)",minHeight:"150vh" }} 
            >
              <Toolbar variant="dense" className="ul-nav">
                <ul className="ul-nav">
                  <li>
                    <Typography>
                      <h2>
                        SB ADMIN<sup>2</sup>
                      </h2>
                    </Typography>
                  </li>
                  <div className="hr">
                    <hr></hr>
                  </div>
                  <li>
                    <Typography>
                      <Link class="nav-link" to="/">
                        <label>DashBoard</label>
                      </Link>
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                      <Link class="nav-link" to="/products">
                        <label>Products</label>
                      </Link>
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                      <Link class="nav-link" to="/user">
                        <label>User</label>
                      </Link>
                    </Typography>
                  </li>
                </ul>
              </Toolbar>
            </AppBar>
          </Box>
        </Grid>
        <Grid item xs={10}>
          <Box>
            <AppBar position="sticky" sx={{ backgroundColor: "white" }}>
              <Toolbar variant="dense">
                <input
                  type="text"
                  name="search"
                  className="input-nav"
                  placeholder="Search For..."
                ></input>
                <Button color="inherit" sx={{ backgroundColor: "blue" }}>
                  <SearchIcon />
                </Button>
                <div className="nav-li">
                  <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="black"
                  >
                    <Badge badgeContent={4} color="error">
                      <MailIcon />
                    </Badge>
                  </IconButton>

                  <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="black"
                  >
                    <Badge badgeContent={17} color="error">
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>

                  <span className="span-profile">Keerthana Durai</span>
                  <Avatar
                      alt="Remy Sharp"
                      src="https://thumbs.dreamstime.com/b/business-woman-user-profile-icon-you-can-use-icon-any-kind-web-print-design-business-woman-user-profile-icon-160648191.jpg"
                    />
                </div>
              </Toolbar>
            </AppBar>
            <div className="children-segment">{children}</div>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
