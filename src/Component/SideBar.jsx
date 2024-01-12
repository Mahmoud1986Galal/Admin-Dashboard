import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Avatar, Tooltip, Typography, styled, useTheme } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import PeopleSharpIcon from "@mui/icons-material/PeopleSharp";
import ContactSupportSharpIcon from "@mui/icons-material/ContactSupportSharp";
import ReceiptIcon from "@mui/icons-material/Receipt";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import CalendarMonthSharpIcon from "@mui/icons-material/CalendarMonthSharp";
import InfoSharpIcon from "@mui/icons-material/InfoSharp";
import BarChartSharpIcon from "@mui/icons-material/BarChartSharp";
import PieChartSharpIcon from "@mui/icons-material/PieChartSharp";
import StackedLineChartSharpIcon from "@mui/icons-material/StackedLineChartSharp";
import MapSharpIcon from "@mui/icons-material/MapSharp";
import { useLocation, useNavigate } from "react-router-dom";
import { blueGrey } from "@mui/material/colors";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(
  // @ts-ignore
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Array1 = [
  {
    id: Math.random(),
    name: "Dashboard",
    icon: <HomeSharpIcon />,
    path: "/",
  },
  {
    id: Math.random(),
    name: "Manage team",
    icon: <PeopleSharpIcon />,
    path: "/team",
  },
  {
    id: Math.random(),
    name: "Contacts information",
    icon: <ContactSupportSharpIcon />,
    path: "/contacts",
  },
  {
    id: Math.random(),
    name: "Invoices balance",
    icon: <ReceiptIcon />,
    path: "/invoices",
  },
];
const Array2 = [
  {
    id: Math.random(),
    name: "Profile form",
    icon: <AccountCircleSharpIcon />,
    path: "/form",
  },
  {
    id: Math.random(),
    name: "Calendar",
    icon: <CalendarMonthSharpIcon />,
    path: "/calendar",
  },
  {
    id: Math.random(),
    name: "FAQ page",
    icon: <InfoSharpIcon />,
    path: "/faq",
  },
];
const Array3 = [
  {
    id: Math.random(),
    name: "Bar chart",
    icon: <BarChartSharpIcon />,
    path: "/bar",
  },
  {
    id: Math.random(),
    name: "Pie chart",
    icon: <PieChartSharpIcon />,
    path: "/pie",
  },
  {
    id: Math.random(),
    name: "Line chart",
    icon: <StackedLineChartSharpIcon />,
    path: "/line",
  },
  {
    id: Math.random(),
    name: "Geography chart",
    icon: <MapSharpIcon />,
    path: "/geography",
  },
];

// eslint-disable-next-line react/prop-types
const SideBar = ({ open, handleDrawerClose, mode }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  let location = useLocation();
  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />

      <Avatar
        sx={{
          mx: "auto",
          width: open ? 88 : 44,
          height: open ? 88 : 44,
          my: 1,
          border: "2px solid gold",
          transition: "0.5s",
        }}
        alt="Remy Sharp"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg/220px-Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg"
      />
      <Typography
        align="center"
        sx={{
          fontSize: open ? 16 : 0,
          transition: "0.5s",
          color: mode === "light" ? "blueviolet" : "gold",
          fontFamily: "fantasy",
          fontStyle: "italic",
        }}
      >
        Mahmoud Galal
      </Typography>
      <Typography
        align="center"
        sx={{
          fontSize: open ? 16 : 0,
          transition: "0.5s",
          color: mode === "light" ? "blueviolet" : "gold",
          fontFamily: "fantasy",
          fontStyle: "italic",
        }}
      >
        Admin
      </Typography>

      <Divider />

      <List>
        {Array1.map((item) => (
          <ListItem key={item.id} disablePadding sx={{ display: "block" }}>
            <Tooltip title={open? null :item.name} placement="bottom">
            <ListItemButton
              onClick={() => {
                navigate(item.path);
              }}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                bgcolor:
                  location.pathname === item.path
                    ? theme.palette.mode === "dark"
                      ? blueGrey[300]
                      : blueGrey[500]
                    : null,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.name}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>

      <Divider />
      <List>
        {Array2.map((item) => (
          <ListItem key={item.id} disablePadding sx={{ display: "block" }}>
          <Tooltip title={open? null :item.name} placement="bottom">
          <ListItemButton
              onClick={() => {
                navigate(item.path);
              }}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                bgcolor:
                  location.pathname === item.path
                    ? theme.palette.mode === "dark"
                      ? blueGrey[300]
                      : blueGrey[500]
                    : null,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.name}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </Tooltip>
            
          </ListItem>
        ))}
      </List>

      <Divider />
      <List>
        {Array3.map((item) => (
          <ListItem key={item.id} disablePadding sx={{ display: "block" }}>
            <Tooltip title={open? null : item.name} placement="bottom" >
            <ListItemButton
              onClick={() => {
                navigate(item.path);
              }}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                bgcolor:
                  location.pathname === item.path
                    ? theme.palette.mode === "dark"
                      ? blueGrey[300]
                      : blueGrey[500]
                    : null,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.name}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>

      <Divider />
    </Drawer>
  );
};

export default SideBar;
