import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Importar as rotas
import Home from './routes/Home.jsx';
import Media from './routes/Media.jsx';
import Writings from './routes/Writings.jsx';

// Configuração do roteador
const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/media', element: <Media /> },
  { path: '/writings', element: <Writings /> },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
