import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import App from './App.jsx'
import ErrorFallback from "./Components/ErrorFallback.jsx";
import { ErrorBoundary } from "react-error-boundary";

createRoot(document.getElementById('root')).render(
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <StrictMode>
    <App />
  </StrictMode>,
  </ErrorBoundary>
 
)
