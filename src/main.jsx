import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import './index.css'
import './CSS/Swiper/styles.css'
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import store from './state/store.jsx'
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ToastContainer/>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
