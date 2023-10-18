// import React from 'react';
// import * as Yup from 'yup';
import { Button, Input } from '@chakra-ui/react';
import { 
  withFormik, 
  FormikProps, 
  FormikErrors, 
  Form, 
  // Field 
} from 'formik';

// Shape of form values
interface FormValues {
  email: string;
  password: string;
}

interface OtherProps {
  message: string;
}
function isValidEmail(email: string) {
  throw new Error('Function not implemented.');
  return email
}

// Aside: You may see InjectedFormikProps<OtherProps, FormValues> instead of what comes below in older code.. InjectedFormikProps was artifact of when Formik only exported a HoC. It is also less flexible as it MUST wrap all props (it passes them through).
const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting, message } = props;
  return (
    <Form>
      <h1>{message}</h1>
      <Input type="email" name="email"/>
      {touched.email && errors.email && <div>{errors.email}</div>}

      <Input type="password" name="password" />
      {touched.password && errors.password && <div>{errors.password}</div>}

      <Button type="submit" disabled={isSubmitting}>
        Submit
      </Button>
    </Form>
  );
};

// The type of props MyForm receives
interface MyFormProps {
  initialEmail?: string;
  message: string; // if this passed all the way through you might do this or make a union type
}

// Wrap our form with the withFormik HoC
const MyForm = withFormik<MyFormProps, FormValues>({
  // Transform outer props into form values
  mapPropsToValues: props => {
    return {
      email: props.initialEmail || '',
      password: '',
    };
  },

  // Add a custom validation function (this can be async too!)
  validate: (values: FormValues) => {
    const errors: FormikErrors<FormValues> = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (!isValidEmail(values.email)) {
      errors.email = 'Invalid email address';
    }
    return errors;
  },

  handleSubmit: (values, {setSubmitting}) => {
    // do submitting things
    setTimeout(() => {

      alert(JSON.stringify(values, null, 2));

      setSubmitting(false);

    }, 1000);
  },
})(InnerForm);

// Use <MyForm /> wherevs
const Basic = () => (
  <div>
    <h1>My App</h1>
    <p>This can be anywhere in your application</p>
    <MyForm message="Sign up" />
  </div>
);

export default Basic;


