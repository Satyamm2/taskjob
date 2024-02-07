import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import PublicRoutes from './routes/routes';

function App() {
  return (
    <>
      <Router>
        <PublicRoutes />
      </Router>
    </>
  );
}

export default App;
