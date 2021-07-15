import { useRoutes, useHash, useRedirect } from 'raviger';
import './App.css';
import { Wrapper } from './components/Wrapper';
import { RouteProvider } from './contexts/routeContext';
import { Stage } from './pages/Stage';

const routes = {
  '/stage/:id': ({ id }: { [k: string]: any }) => <Stage id={id} />,
}

function App() {
  const config: string = 'path';
  let route;
  const match = useRoutes(routes);
  const hash = useHash({ stripHash: true });
  useRedirect('/', '/stage/1');
  switch (config) {
    case 'hash':
      console.log(hash);
      route = <Stage id={hash ?? 1}/>;
      break;
    default:
      route = match;
  }
  return (
    <RouteProvider>
      <Wrapper title="foo">
        {route}
      </Wrapper>
    </RouteProvider>
  );
}

export default App;

