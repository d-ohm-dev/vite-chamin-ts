import logo from '../../assets/fotos/logo.png';
import invlogo from '../../assets/fotos/invlogo.png';
import { Formik, Field, Form, ErrorMessage } from "formik";
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
import * as Yup from 'yup';
import { Link } from 'react-router-dom';




export default function Basic() {
  const SwitchImg = useColorModeValue(logo, invlogo);
  return (
    <VStack bg="gray.100" align="center" justify="center" h="100vh">
      <Link to={'/'}>  
        <Img src={SwitchImg} alt="Logo" maxH='175%' maxW='175%' ml={{base: -500}} mt={{base: -20}} />
      </Link>
      <Box bg="white" p={6} rounded="md" w={64}>
        <Formik
          initialValues={{
            email: "",
            password: "",
            rememberMe: false
          }}
          validationSchema={Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
          })}
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
                <FormControl>
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
                  />
                  <ErrorMessage name="email" />
                </FormControl>
                <FormControl isInvalid={!!errors.password && touched.password}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Field
                    as={Input}
                    id="password"
                    name="password"
                    type="password"
                    variant="filled"
                    validate={(value: string) => {
                      let error;

                      if (value.length < 6) {
                        error = "Password must contain at least 6 characters";
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
                  colorScheme="purple"
                >
                  Remember me?
                </Field>
                <Button type="submit" colorScheme="purple" width="full">
                  Login
                </Button>
              </VStack>
            </Form>
          )}
        </Formik>
      </Box>
    </VStack>
  );
}