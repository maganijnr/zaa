import React from 'react'
import {
  RegisterPage,
  RegisterLogo,
  RegisterBody,
  FormTopBar,
  FormHeader,
  Form,
  InputWrapper,
  InputLabel,
  Input,
  FormButton,
  FormRedirectWrapper,
  FormRedirect,
  ErrorWrapper,
  ErrorMessage
} from './RegisterStyles'

const Register = () => {
  let user = true
  return (
    <RegisterPage>
      <RegisterLogo to="/">
        ZAA'A
      </RegisterLogo>
      <RegisterBody>
        <FormTopBar>
          <FormHeader>Register</FormHeader>
        </FormTopBar> 
        <Form>
          <InputWrapper>
            <InputLabel htmlFor='usernmae'>Usernmae</InputLabel>
            <Input name="usernmae" type="text"/>
          </InputWrapper>
          {user ? null : <ErrorWrapper>
            <ErrorMessage>Username is too short</ErrorMessage>
          </ErrorWrapper>}

          <InputWrapper>
            <InputLabel htmlFor='email'>Email</InputLabel>
            <Input name="email" type="email"/>
          </InputWrapper>
          {user ? null : <ErrorWrapper>
            <ErrorMessage>Invalid Email Address</ErrorMessage>
          </ErrorWrapper>}

          <InputWrapper>
            <InputLabel htmlFor='password'>Password</InputLabel>
            <Input name="password" type="password"/>
          </InputWrapper>
          {user ? null : <ErrorWrapper>
            <ErrorMessage>Incorrect Password</ErrorMessage>
          </ErrorWrapper>}

          <FormButton>Sign Up</FormButton>

          <FormRedirectWrapper>
            <FormRedirect to='/login'>Already have an account? Log in</FormRedirect>
          </FormRedirectWrapper>
        </Form>
      </RegisterBody>
    </RegisterPage>
  )
}

export default Register
