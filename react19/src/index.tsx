import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
  {
    onCaughtError: (err, errorInfo) => {
      console.error('[onCaughtError]', err, errorInfo.componentStack)
    },
    onUncaughtError: (err, errorInfo) => {
      console.error('[onUncaughtError]', err, errorInfo.componentStack)
    },
    onRecoverableError: (err, errorInfo) => {
      console.error('[onRecoverableError]', err, errorInfo.componentStack)
    },
  }
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

reportWebVitals()
