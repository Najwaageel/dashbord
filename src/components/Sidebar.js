import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import GroupIcon from "@mui/icons-material/Group"
import { createTheme, ThemeProvider } from "@mui/material"
import { Link } from "react-router-dom"
import LoginIcon from "@mui/icons-material/Login" 
import { useContext } from "react"
import GamesContext from "../utils/GamesContext"
import { GiAbbotMeeple, GiBullseye } from "react-icons/gi"

const drawerWidth = 240

export default function PermanentDrawerLeft() {
  const { logout } = useContext(GamesContext)
  return (
    <ThemeProvider
      theme={createTheme({
        components: {
          MuiListItemButton: {
            defaultProps: {
              disableTouchRipple: true,
            },
          },
        },
        palette: {
          mode: "dark",
          primary: { main: "rgb(102, 157, 246)" }, 
          background: { paper: "rgb(104, 103, 172)" }, 
        },
      })}
    >
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Divider />

        <List>
          <ListItem>
            <ListItemIcon>
            <GiAbbotMeeple />
            </ListItemIcon>
            <ListItemText primary="My Disney Park dashboard" />
          </ListItem>
        </List>

        <Divider />

        <List>
          <Link to="/games">
            <ListItem button>
              <ListItemIcon>
                <GiBullseye />
              </ListItemIcon>
              <ListItemText primary="games" sx={{ color: "white" , textDecoration: "none"  }} />
            </ListItem>
          </Link>
        </List>

        <Divider />
        <List>
          <Link to="/users">
            <ListItem button>
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="users" sx={{ color: "white" , textDecoration: "none" }} />
            </ListItem>
          </Link>
        </List>

        <Divider />

        <List style={{ marginTop: "auto" }}>
          {localStorage.tokenDashboard ? (
            <Link to="/login">
              <ListItem button>
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText primary="logout" sx={{ color: "white", textDecoration: "none" }} onClick={logout} />
              </ListItem>
            </Link>
          ) : (
            <Link to="/login">
              <ListItem button>
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText primary="login" sx={{ color: "white", textDecoration: "none" }} />
              </ListItem>
            </Link>
          )}
        </List>
      </Drawer>
    </ThemeProvider>
  )
}
