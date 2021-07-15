import { ComponentType } from 'react';
import { BrowserRouter, HashRouter, MemoryRouter } from 'react-router-dom';
import './App.css';
import { Wrapper } from './components/Wrapper';
import { RouteProvider } from './contexts/routeContext';



function App() {
  let config = 'path';
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
    <RouteProvider>
      <Router>
       <Wrapper title="foo" />
      </Router>
    </RouteProvider>
  );
}

export default App;
