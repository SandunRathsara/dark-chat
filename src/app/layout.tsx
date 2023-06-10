"use client"
import "./globals.css"
import { Gothic_A1 } from "next/font/google"
import CssBaseline from "@mui/material/CssBaseline"
import AppBar from "@mui/material/AppBar"
// import Box from "@mui/material/Box"
// import IconButton from "@mui/material/IconButton"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
// import Menu from "@mui/material/Menu"
// import MenuItem from "@mui/material/MenuItem"
import ThemeSwitch from "@/components/ThemeSwitch"
// import Button from "@mui/material/Button"
// import MenuIcon from "@mui/icons-material/Menu"
import { ReactNode, useState /*MouseEvent*/ } from "react"
import { ThemeProvider } from "@mui/material"
import { darkTheme, lightTheme } from "@/config/theme"

const font = Gothic_A1({ weight: "400", subsets: ["latin"] })

export default function RootLayout({ children }: { children: ReactNode }) {
  // const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  // const open = Boolean(anchorEl)
  const [theme, setTheme] = useState<"dark" | "light">("dark")
  // const handleClick = (event: MouseEvent<HTMLElement>) => {
  //   setAnchorEl(event.currentTarget)
  // }
  // const closeMenu = () => {
  //   setAnchorEl(null)
  // }

  return (
    <html lang="en">
      <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        <CssBaseline />
        <body className={font.className}>
          <AppBar component="nav">
            <Toolbar>
              {/*<IconButton*/}
              {/*  color="inherit"*/}
              {/*  aria-label="open menu"*/}
              {/*  aria-controls={open ? "demo-positioned-menu" : undefined}*/}
              {/*  aria-haspopup="true"*/}
              {/*  aria-expanded={open ? "true" : undefined}*/}
              {/*  edge="start"*/}
              {/*  onClick={handleClick}*/}
              {/*  sx={{ mr: 2, display: { sm: "none" } }}*/}
              {/*>*/}
              {/*  <MenuIcon />*/}
              {/*</IconButton>*/}
              {/*<Menu*/}
              {/*  id="demo-positioned-menu"*/}
              {/*  aria-labelledby="demo-positioned-button"*/}
              {/*  anchorEl={anchorEl}*/}
              {/*  open={open}*/}
              {/*  onClose={closeMenu}*/}
              {/*  anchorOrigin={{*/}
              {/*    vertical: "top",*/}
              {/*    horizontal: "left",*/}
              {/*  }}*/}
              {/*  transformOrigin={{*/}
              {/*    vertical: "top",*/}
              {/*    horizontal: "left",*/}
              {/*  }}*/}
              {/*>*/}
              {/*  <MenuItem onClick={() => alert("Menu Item selected")}>*/}
              {/*    Test menu item*/}
              {/*  </MenuItem>*/}
              {/*</Menu>*/}
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                DARK CHAT
              </Typography>
              {/*<Box*/}
              {/*  sx={{ display: { xs: "none", sm: "block" } }}*/}
              {/*  onClick={() => alert("Nav Item clicked")}*/}
              {/*>*/}
              {/*  <Button>Test nav item</Button>*/}
              {/*</Box>*/}
              <ThemeSwitch
                checked={theme === "dark"}
                onChange={event =>
                  setTheme(event.target.checked ? "dark" : "light")
                }
              />
            </Toolbar>
          </AppBar>
          {children}
        </body>
      </ThemeProvider>
    </html>
  )
}
