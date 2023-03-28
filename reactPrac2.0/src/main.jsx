import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import FetchApi from './fetchMethod/fetch1'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FetchApi />
  </React.StrictMode>,
)
