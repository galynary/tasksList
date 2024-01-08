import { App } from 'components/App';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import {} from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import './styles/index.css';
import './styles/theme.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/react">
        <PersistGate loading={null} persistor={persistor}>
          <ChakraProvider>
            <App />
          </ChakraProvider>
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);