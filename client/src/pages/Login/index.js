import React from 'react'
import {
  LoginPage,
  LoginLogo,
  LoginBody,
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
} from './LoginStyles'

const Login = () => {
  let user = true
  return (
    <LoginPage>
      <LoginLogo>
        ZAA'A
      </LoginLogo>
      <LoginBody>
        <FormTopBar>
          <FormHeader>LOGIN</FormHeader>
        </FormTopBar> 
        <Form>
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

          <FormButton>Sign In</FormButton>
          <FormRedirectWrapper>
            <FormRedirect to='/register'>Don't have an account? Create One</FormRedirect>
          </FormRedirectWrapper>
        </Form>
      </LoginBody>
    </LoginPage>
  )
}

export default Login
