import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {app, storage} from './firebase';
import { DataProvider } from './contexts/DataProvider';
import { AuthProvider } from './contexts/AuthProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <DataProvider>
        <App /> 
      </DataProvider>
    </AuthProvider>
  </React.StrictMode>,
)
