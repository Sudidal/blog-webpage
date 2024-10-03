import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import { RouterProvider } from 'react-router-dom'
import router from './reactRouter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
