import {
  Box,
  Card,
  CardContent,
  CssBaseline,
  Typography,
} from '@material-ui/core'
import './App.css'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import React from 'react'
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom'
import Profile from './histories/Profile'
import HuntPoster from './histories/HuntPoster'

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode]
  )
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route path="/profile">
            <Profile></Profile>
          </Route>
          <Route path="/hunt-poster">
            <HuntPoster></HuntPoster>
          </Route>
          <Route exact={true} path="/">
            <Box className="ji-n-se-i">
              <Card className="ji-n-se-i__history">
                <CardContent>
                  <Typography variant="h6">2021-05-20</Typography>
                  <Typography variant="h4">
                    micro service in front-end
                  </Typography>
                </CardContent>
              </Card>
              <Card className="ji-n-se-i__history">
                <CardContent>
                  <Typography variant="h6">2021-05-01</Typography>
                  <Typography variant="h4">line of ci/cd</Typography>
                </CardContent>
              </Card>
              <Card className="ji-n-se-i__history">
                <Link to="/hunt-poster" className="ji-n-se-i__history-link">
                  <CardContent>
                    <Typography variant="h6">2021-03-07</Typography>
                    <Typography variant="h4">hunt poster</Typography>
                  </CardContent>
                </Link>
              </Card>
              <Card className="ji-n-se-i__history ji-n-se-i__history--empty"></Card>
              <Card className="ji-n-se-i__history ji-n-se-i__history--profile">
                <Link to="/profile" className="ji-n-se-i__history-link">
                  <CardContent>
                    <Typography variant="h6">nil-nil-nil</Typography>
                    <Typography variant="h4">profile</Typography>
                  </CardContent>
                </Link>
              </Card>
            </Box>
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
