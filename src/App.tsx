import {ChakraProvider} from '@chakra-ui/react';
import themes from './theme'
import Frontpage from './containers/Frontpage';

function App() {
  // Here's the signature
  return (
    <ChakraProvider theme={themes}>
      <Frontpage/>
    </ChakraProvider>
  );
}

export default App;