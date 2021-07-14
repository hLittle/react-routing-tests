import './App.css';
import { Wrapper } from './components/Wrapper';
import { RouteContext, RouteProvider } from './contexts/routeContext';
import { Stage } from './pages/Stage';

function App() {
  return (
    <RouteProvider>
      <Wrapper title="foo">
        <RouteContext.Consumer>
          {({ state }) => (
            <Stage id={state.currentStage} />
          )}
        </RouteContext.Consumer>
      </Wrapper>
    </RouteProvider>
  );
}

export default App;
