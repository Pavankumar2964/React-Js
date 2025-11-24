import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {provider} from "reat-redux";
import './index.css'
import App from './App.jsx'
import { store } from './store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <provider></provider>
  </StrictMode>,
);
