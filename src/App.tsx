import { useRoutes } from 'raviger';
import './App.css';
import { Wrapper } from './components/Wrapper';
import { RouteProvider } from './contexts/routeContext';
import { Stage } from './pages/Stage';

const routes = {
  '/': () => <Stage />,
  '/stage/:id': ({ id }: { [k: string]: any }) => <Stage id={id} />,
}
function App() {
  const match = useRoutes(routes);
  return (
    <RouteProvider>
      <Wrapper title="foo">
        {match}
      </Wrapper>
    </RouteProvider>
  );
}

export default App;
