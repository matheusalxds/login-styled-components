import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// style
import { themes } from './styles';

// pages
import { Login, Home } from './pages';

// components
import { GlobalStyle, ThemeProvider } from './common';

function App() {
  const [theme, setTheme] = useState(themes.lightTheme);

  const toggleTheme = () => setTheme((s) => (s.id === 'lightTheme' ? themes.draculaTheme : themes.lightTheme));

  return (
    <ThemeProvider theme={{ ...theme, setTheme: toggleTheme }}>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
