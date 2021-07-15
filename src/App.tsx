import { ComponentType } from 'react';
import { Route, Routes, BrowserRouter, HashRouter, MemoryRouter } from 'react-router-dom';
import './App.css';
import { Wrapper } from './components/Wrapper';
import { RouteProvider } from './contexts/routeContext';
import { Stage } from './pages/Stage';

function App() {
  let config = 'static';
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
      <Wrapper title="foo">
        <Router>
          <Routes>
            <Route path="/stage/:id" element={<Stage />} />
            <Route path="/" element={<Stage />} />
          </Routes>
        </Router>
      </Wrapper>
    </RouteProvider>
  );
}

export default App;
