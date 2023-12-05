import logo from '../../assets/fotos/logo.png';
import invlogo from '../../assets/fotos/invlogo.png';
import { Formik, Field, Form } from "formik";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  Img,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from 'react-router-dom';




export default function Basic() {
  const SwitchImg = useColorModeValue(logo, invlogo)
  const textColor = useColorModeValue('gray.600', 'white')
  const bgBoxColor = useColorModeValue( 'blue.200', 'blue.700')
  const colorMode1 = useColorModeValue( 'SlateGray', 'WhiteSmoke')
  return (
    <VStack 
    bg={useColorModeValue('linear-gradient( to bottom right, rgba(244, 244, 244, 1), rgb(137, 209, 253) )!important', 'linear-gradient( to bottom right, #0c4083, rgba(19, 29, 77, 0.94) )!important')}
    align="center" 
    justify="center" 
    h="100vh" 
    >
      <Link to={'/'}>  
        <Img src={SwitchImg} alt="Logo" maxH='175%' maxW='175%' ml={{base: -500}} mt={{base: -20}} />
      </Link>
      <Box bg={bgBoxColor} p={6} rounded="md" w={64}>
        <Formik
          initialValues={{
            email: "",
            password: "",
            rememberMe: false
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <Form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl isInvalid={!!errors.email && touched.email}>
                  <FormLabel color={textColor} >Correo Electrónico</FormLabel>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
                    placeholder='ejemplo@ejemplo.co'
                    colorScheme={textColor}
                    validate={(value:string) => {
                      let error;

                      if (!value) {
                        error = 'Necesario';
                      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
                        error = 'Correo inválido';
                      }
                      return error;
                    }}
                />
                  <Box color={'red.600'} >
                    <FormErrorMessage> {errors.email} </FormErrorMessage>
                  </Box>
                </FormControl>

                <FormControl isInvalid={!!errors.password && touched.password}>
                  <FormLabel color={textColor} htmlFor="password">Contraseña</FormLabel>
                  <Field
                    as={Input}
                    id="password"
                    name="password"
                    type="password"
                    variant="filled"
                    validate={(value: string) => {
                      let error;

                      if (value.length < 6) {
                        error = "La contraseña debe contener al menos 6 caracteres";
                      }

                      return error;
                    }}
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
                
                <Field
                  as={Checkbox}
                  id="rememberMe"
                  name="rememberMe"
                  color={textColor}
                  border={colorMode1}
                >
                  Recuerdame?
                </Field>
                <Button 
                type="submit" 
                bg={'pink.400'}
                _hover={{
                  bg: 'pink.300',
                }}
                width="full"
                >
                  Ingresar
                </Button>
              </VStack>
            </Form>
          )}
        </Formik>
      </Box>
    </VStack>
  );
}