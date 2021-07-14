import './App.css';
import { Wrapper } from './components/Wrapper';
import { Navbar } from './components/Navbar';
import { HookRouter, useRoutes } from 'hookrouter';
import { NotFound } from './pages/NotFound';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

const routes = {
  '/': () => <Home />,
  '/about*': () => <About />,
  '/contact/:name': ({ name }: HookRouter.QueryParams) => <Contact name={name} />,
}

function App() {
  const match = useRoutes(routes);
  return (
    <Wrapper title="foo">
      <Navbar />
      {match || <NotFound />}
    </Wrapper>
  );
}

export default App;
