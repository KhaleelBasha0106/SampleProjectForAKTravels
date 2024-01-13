import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Link as RouterLink } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Badge from "@mui/material/Badge";
import Notifications from "@mui/icons-material/Notifications";
import TrackStatus from "./TrackStatus";
import TicketCancel from "./TicketCancel";
import TrackService from "./TrackService";
import Gallery from "./Gallery";

const drawerWidth = 240;

const navItems = [
  { name: "Ticket Cancel", component: <TicketCancel />, path: "/TicketCancel" },
  { name: "Track Service", component: <TrackService />, path: "/TrackService" },
  { name: "Track Status", component: <TrackStatus />, path: "/TrackStatus" },
  { name: "Gallery", component: <Gallery />, path: "/Gallery" },
];

const avatarItems = ["My Profile", "View", "LogOut"];
export default function NavbarTest(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        sx={{
          my: 2,
          display: {
            xs: "none",
          },
        }}
      >
        AK TRAVELS
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name}>
            <ListItemButton
              component={RouterLink}
              to={item.path}
              sx={{ textDecoration: "none" }}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const open = Boolean(anchorEl);
  const id = open ? "avatar-options" : undefined;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: " #FFBE7B" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{
              mr: 2,
              ":hover": "#FFBE7B",
              display: { md: "none", sm: "none" },
            }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "block", md: "block", sm: "flex" },
            }}
          >
            AK TRAVELS
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "block",
                  sm: "block",
                },
              }}
            >
              {navItems.map((item, index) => {
                return (
                  <Link to={item.path} key={index}>
                    <Button sx={{ color: "white" }}>{item.name}</Button>
                  </Link>
                );
              })}
            </Box>
            <Badge badgeContent={4} color="secondary" sx={{ marginTop: 0.5 }}>
              <Notifications
                sx={{
                  fontSize: 30,
                  marginLeft: {
                    xs: 1,
                    md: 3,
                  },
                  cursor: "pointer",
                }}
              />
            </Badge>
            <Avatar
              sx={{ marginLeft: 2, cursor: "pointer" }}
              onClick={handleClick}
            />
          </Box>
        </Toolbar>
      </AppBar>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {avatarItems.map((item, index) => {
          return (
            <List key={index} sx={{ padding: "10px 40px" }}>
              <ListItem>
                <ListItemText primary={item} />
              </ListItem>
            </List>
          );
        })}
      </Popover>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
