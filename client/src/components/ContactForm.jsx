'use client';
import React from 'react';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea // Import Textarea for Query Text/Feedback
} from  "@chakra-ui/react";
import { Field, FieldProps, Form, Formik } from 'formik';

export default function ContactForm() {
  // Validation function for Name
  function validateName(value) {
    let error;
    if (!value) {
      error = 'Name is Required';
    }
    return error;
  }

  // Validation function for Email
  function validateEmail(value) {
    let error;
    if (!value) {
      error = 'Email is Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      error = 'Invalid email address';
    }
    return error;
  }

  // Validation function for Phone Number
  function validatePhone(value) {
    let error;
    if (!value) {
      error = 'Phone Number is Required';
    } else if (!/^\d{10}$/i.test(value)) {
      error = 'Invalid phone number';
    }
    return error;
  }

  // Validation function for Query
  function validateQuery(value) {
    let error;
    if (!value) {
      error = 'Feedback is Required';
    }
    return error;
  }

  return (
    <Formik
      initialValues={{ name: '', email: '', phone: '', query: '' }} // Add email, phone, and query fields
      onSubmit={(values, actions) => {
        setTimeout(() => {
          // Display the form values in an alert
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {props => (
        <Form className="flex flex-col gap-3">
          <Field name="name" validate={validateName}>
            {({ field, form }) => (
              <FormControl
                isInvalid={
                  (form.errors.name) &&
                  (form.touched.name)
                }
                mb={4}
              >
                <div className="flex justify-between items-center">
                  <FormLabel className="text-center text-xl m-0 p-0">
                    Name
                  </FormLabel>
                  <Input
                    {...field}
                    id="name"
                    className="w-[500px] bg-white border border-black hover:border-black"
                  />
                </div>
                <FormErrorMessage>
                  {form.errors.name}
                </FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="email" validate={validateEmail}>
            {({ field, form }) => (
              <FormControl
                isInvalid={
                  (form.errors.email ) &&
                  (form.touched.email)
                }
                mb={4}
              >
                <div className="flex justify-between items-center">
                  <FormLabel className="text-center text-xl m-0 p-0">
                    Email
                  </FormLabel>
                  <Input
                    {...field}
                    id="email"
                    type="email" // Set input type to 'email'
                    className="w-[500px] bg-white border border-black hover:border-black"
                  />
                </div>
                <FormErrorMessage>
                  {form.errors.email}
                </FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="phone" validate={validatePhone}>
            {({ field, form }) => (
              <FormControl
                isInvalid={
                  (form.errors.phone) &&
                  (form.touched.phone)
                }
                mb={4}
              >
                <div className="flex justify-between items-center">
                  <FormLabel className="text-center text-xl m-0 p-0">
                    Phone Number
                  </FormLabel>
                  <Input
                    {...field}
                    id="phone"
                    type="tel" // Set input type to 'tel' for phone numbers
                    className="w-[500px] bg-white border border-black hover:border-black"
                  />
                </div>
                <FormErrorMessage>
                  {form.errors.phone}
                </FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="query" validate={validateQuery}>
            {({ field, form }) => (
              <FormControl
                isInvalid={
                  (form.errors.query) &&
                  (form.touched.query)
                }
                mb={4}
              >
                <FormLabel className="text-xl m-0 p-0">Feedback</FormLabel>
                <Input
                  {...field}
                  id="query"
                  className="w-full h-40 m-0 p-4 bg-white border border-black hover:border-black"
                />

                <FormErrorMessage>
                  {form.errors.query}
                </FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            mt={4}
            className="bg-[#C726FF] text-white hover:bg-violet-800 w-44 h-12 rounded-full"
            isLoading={props.isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}