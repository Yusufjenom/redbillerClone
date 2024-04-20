import React from 'react';
import { Formik, Form, Field } from 'formik';
import Select from 'react-select';

// Define options for the select input
const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const App = () => {
  return (
    <div>
      <h1>Form with React-Select and Formik</h1>
      <Formik
        initialValues={{
          selectOption: null,
        }}
        onSubmit={values => {
          console.log(values);
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Field name="selectOption">
              {({ field }) => (
                <Select
                  {...field}
                  options={options}
                  onChange={option => {
                    field.onChange({ target: { name: field.name, value: option }});
                  }}
                  onBlur={field.onBlur}
                  placeholder="Select an option"
                />
              )}
            </Field>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default App;
