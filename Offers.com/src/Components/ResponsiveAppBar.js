import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import CloseIcon from "@mui/icons-material/Close";
import ListItemText from "@mui/material/ListItemText";

import { Link } from "@mui/material";
import SearchBar from "./SearchBar";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),

  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const navOptions = [
    {
      option: "Stores",
      subMenu: [
        { text: "Amazon", link: "/amazon" },
        { text: "Hobby Lobby", link: "/hobby-lobby" },
        { text: "Home Depot", link: "/home-depot" },
        { text: "JCPenny", link: "/jcpenny" },
        { text: "SHEIN", link: "/shein" },
        { text: "Target", link: "/target" },
        { text: "All Stores", link: "/all-stores" },
      ],
    },
    {
      option: "Categories",
      subMenu: [
        { text: "Clothing", link: "/" },
        { text: "AutoParts", link: "/" },
        { text: "Electronics", link: "/" },
        { text: "Fast Food", link: "/" },
        { text: "Furniture", link: "/" },
        { text: "Health & Beauty", link: "/" },
      ],
    },
    {
      option: "Savings Events",
      subMenu: [
        { text: "Black Friday", link: "/black-friday" },
        { text: "Easter", link: "/easter" },
        { text: "Cyber Monday", link: "/cyber-monday" },
        { text: "All Events", link: "/all-events" },
      ],
    },
  ];

  const navOption = [
    {
      text: "Best Deals",
      link: "/Best-Deals",
    },
    {
      text: "Savings Tips",
      link: "/Savings-Tips",
    },
  ];

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openSubMenu, setOpenSubMenu] = React.useState(null);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleSubMenuClick = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: "#00a6aa" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}>
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{ color: "white", fontSize: "30px", marginRight: "10px" }}>
            Offers<span>.com</span>
          </Typography>
        </Toolbar>{" "}
        <Box sx={{}}></Box>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}>
        <DrawerHeader sx={{ bgcolor: "#051e44" }}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <CloseIcon sx={{ color: "white" }} />
            ) : (
              <CloseIcon sx={{ color: "white" }} />
            )}
          </IconButton>
        </DrawerHeader>
        <SearchBar />
        <Divider />
        <>
          <List>
            {navOptions.map((list, i) => (
              <React.Fragment key={i}>
                <ListItem onClick={() => handleSubMenuClick(i)}>
                  <ListItemButton>
                    <Typography
                      component={"a"}
                      sx={{ fontWeight: "600", fontSize: "15px" }}>
                      {list.option}
                    </Typography>
                  </ListItemButton>
                  <ChevronRightIcon sx={{ marginTop: "3px" }} />
                </ListItem>
                <List
                  component="div"
                  disablePadding
                  sx={{ display: openSubMenu === i ? "block" : "none" }}>
                  {list.subMenu.map((subItem, index) => (
                    <ListItem key={index} sx={{ pl: 4 }}>
                      <ListItemButton>
                        <Link
                          href={subItem.link}
                          underline="none"
                          sx={{ color: "black" }}>
                          {subItem.text}
                        </Link>
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </React.Fragment>
            ))}

            <List>
              {navOption.map((list, i) => (
                <ListItem key={1}>
                  <ListItemButton>
                    <Typography
                      component={"a"}
                      href={list.link}
                      sx={{
                        color: "black",
                        fontWeight: "500",
                        fontSize: "15px",
                        textDecoration: "none",
                      }}>
                      {list.text}
                    </Typography>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </List>
        </>
      </Drawer>
    </Box>
  );
}
