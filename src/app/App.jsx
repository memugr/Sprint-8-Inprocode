import '../styles/App.css';
import { AppProvider } from './provider.jsx';
import { RouterProvider } from 'react-router-dom';
import router from './routes';

function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  )
}

export default App;