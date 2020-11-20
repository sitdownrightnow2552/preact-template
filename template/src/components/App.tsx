import { FunctionalComponent, h } from 'preact';
import {
  AppBar,
  Button,
  createMuiTheme,
  CssBaseline,
  IconButton,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'preact/compat';
import { Menu } from '@material-ui/icons';

const Home = lazy(() => import('../routes/Home'));
const Profile = lazy(() => import('../routes/Profile'));

const App: FunctionalComponent = () => {
  const theme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

  return (
    <div id="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <Menu />
              </IconButton>
              <Typography variant="h6">Application</Typography>
              <div className="flex justify-end flex-grow">
                <Link to="/">
                  <Button>Home</Button>
                </Link>
                <Link to="profile/">
                  <Button>Me</Button>
                </Link>
                <Link to="/profile/john">
                  <Button>John</Button>
                </Link>
              </div>
            </Toolbar>
          </AppBar>
          <main className="container flex justify-center py-5 md:py-6 lg:py-8 px-2">
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile/" element={<Profile />} />
                <Route path="/profile/:user" element={<Profile />} />
              </Routes>
            </Suspense>
          </main>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
