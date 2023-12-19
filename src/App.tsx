import {ChakraProvider} from '@chakra-ui/react';
import themes from './theme'

import { RouterProvider } from 'react-router-dom';
import router from './router';
// import { RouterProvider } from 'react-router-dom';
// import router from './router';

function App() {
  // Here's the signature
  return (
    <ChakraProvider theme={themes} >
      <RouterProvider router={router}/>
    </ChakraProvider>
  );
}

export default App;