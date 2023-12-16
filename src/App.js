import logo from './logo.svg';
import './App.css';
import Routers from './routes/Routers';
import { AuthProvider } from './Context/userContext';
import Layout from './Layout/Layout';

function App() {
  return (
  <>
      <AuthProvider>
        <Layout/>
      </AuthProvider></>
  );
}

export default App;
