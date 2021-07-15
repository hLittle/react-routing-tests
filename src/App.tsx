import { Route, Router } from 'wouter';
import './App.css';
import { Wrapper } from './components/Wrapper';
import { RouteProvider } from './contexts/routeContext';
import { Stage } from './pages/Stage';

function App() {
  return (
    <RouteProvider>
      <Wrapper title="foo">
        <Router>
          <Route path="/stage/:id">{(params) => <Stage id={params.id} />}</Route>
          <Route><Stage /></Route>
        </Router>
      </Wrapper>
    </RouteProvider>
  );
}

export default App;
