import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RenderCategories from './Routes/RenderCategories/RenderCategories.tsx'
import CalculatorsSelector from './components/CalculatorsSelector/CalculatorsSelector.tsx'
import CalculatorsRoute from './Routes/CalculatorsRoute.tsx'
import Home from './pages/Home.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/categories",
        element: <RenderCategories/>
      },
      {
        path: "/calculators",
        element: <CalculatorsSelector/>
      },
      {
        path: "/calculators/:id",
        element: <CalculatorsRoute/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

// Remove Preload scripts loading
postMessage({ payload: 'removeLoading' }, '*')

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message)
})
