import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import { Wrapper } from './components/Wrapper';
import { RouteProvider } from './contexts/routeContext';
import { Stage } from './pages/Stage';

function App() {
  return (
    <RouteProvider>
      <Wrapper title="foo">
        <BrowserRouter>
          <Routes>
            <Route path="/stage/:id" element={<Stage />} />
            <Route path="/" element={<Stage />} />
          </Routes>
        </BrowserRouter>
      </Wrapper>
    </RouteProvider>
  );
}

export default App;
