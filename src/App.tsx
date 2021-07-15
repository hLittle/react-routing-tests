import { useEffect, useState } from 'react';
import { BaseLocationHook, Route, Router } from 'wouter';
import './App.css';
import { Wrapper } from './components/Wrapper';
import { RouteProvider } from './contexts/routeContext';
import { Stage } from './pages/Stage';

// returns the current hash location in a normalized form
// (excluding the leading '#' symbol)
const currentLocation = () => {
  return window.location.hash.replace(/^#/, "") || "/";
};

const navigate = (to: string) => (window.location.hash = to);

const useHashLocation: BaseLocationHook = () => {
  const [loc, setLoc] = useState(currentLocation());

  useEffect(() => {
    // this function is called whenever the hash changes
    const handler = () => setLoc(currentLocation());

    // subscribe to hash changes
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  return [loc, navigate];
};

function App() {
  let config = 'path';
  let hook: BaseLocationHook | undefined;
  switch (config) {
    case 'hash':
      hook = useHashLocation;
      break;
    default:
      hook = undefined;
      break;
  }
  return (
    <RouteProvider>
      <Wrapper title="foo">
        <Router hook={hook}>
          <Route path="/stage/:id">{(params) => <Stage id={params.id} />}</Route>
          <Route><Stage /></Route>
        </Router>
      </Wrapper>
    </RouteProvider>
  );
}

export default App;
