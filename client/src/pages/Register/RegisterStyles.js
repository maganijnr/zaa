import styled from 'styled-components'

import { Link as LinkL } from 'react-router-dom'

const RegisterPage = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: #000;
`
const RegisterLogo = styled(LinkL)`
  color: #fff;
  font-weight: 700;
  font-size: 3rem;
  position: absolute;
  top: 20px;
  left: 30px;
`
const RegisterBody = styled.div`
  width: 450px;
  background: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
`

const FormTopBar = styled.div`
  width: 100%;
  height: 40px;
  background: #C4C4C4;
  display: flex;
  justify-content:center;
  align-items:center;
  border-radius: 10px 10px 0px 0px;
`

const FormHeader = styled.h2`
  color: #000;
  font-size: 1.8rem;
  font-weight: 700;
`

const Form = styled.div`
  width: 100%;
  max-width: 350px;
  margin: 1rem auto;
`

const InputWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin: 1rem 0;
`

const InputLabel = styled.label`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: .2rem;
`
const Input = styled.input`
  width: 100%;
  height: 40px;
  font-family: inherit;
  border: 2px solid #000;
  padding-left: 10px;
  outline: none;
  font-size: 1.15rem;
  font-weight: 600;
  border-radius: 10px;
`

const FormButton = styled.button`
  display: block;
  width: 100%;
  height: 40px;
  background: #000;
  font-size: 1.2rem;
  font-weight: 600;
  color: #fff;
  border: 1px solid #000;
  border-radius: 10px;
  cursor: pointer;
`

const FormRedirectWrapper = styled.div`
  text-align: center;
  margin: 1rem auto
`
const FormRedirect = styled(LinkL)`
  color: #000;
  font-weight: 600;
  font-size: 1.15rem;
`
const ErrorWrapper = styled.div`
  margin: -10px auto 25px;
  display: flex;
  align-items: flex-start;
  padding-left: 5px;
`

const ErrorMessage = styled.h4`
  font-size: 1.12rem;
  font-weight: 500;
  color: red;
`

export {
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
}