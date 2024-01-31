import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
// import App from './App.tsx'
import { RouterProvider } from 'react-router-dom'
import router from './router.tsx'
// import App from './App.tsx'
import themes from './theme'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ChakraProvider theme={themes} >
      <RouterProvider router={router}/>
    </ChakraProvider>
  </React.StrictMode>
)
