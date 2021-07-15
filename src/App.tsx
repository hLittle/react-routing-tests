import './App.css';
import { Wrapper } from './components/Wrapper';
import { RouteProvider } from './contexts/routeContext';
import { Stage } from './pages/Stage';
import { MemoryRouter, BrowserRouter, HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { ComponentType } from 'react';

function App() {
  let config = 'hash';
  let Router: ComponentType;
  switch (config) {
    case 'hash':
      Router = HashRouter;
      break;
    case 'static':
      Router = MemoryRouter;
      break;
    default:
      Router = BrowserRouter;
      break;
  }
  return (
    <Router>
      <RouteProvider>
        <Wrapper title="foo">
          <Switch>
            <Route path="/stage/:id">
              <Stage />
            </Route>
            <Redirect from="/" to="/stage/1" />
          </Switch>
        </Wrapper>
      </RouteProvider>
    </Router>
  );
}

export default App;
