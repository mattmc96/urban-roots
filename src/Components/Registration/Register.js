import React, { useState, useRef, useEffect } from 'react'
import AuthService from '../Services/authService'
import Message from './Message'

import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  left: 20em;
  top: 20em;
  box-sizing: border-box;
  border: 1px solid black;
  z-index: -3;
  display: flex;
  width: 15rem;
  height: 15rem;
  flex-direction: column;
  align-items: center;
`
const H3 = styled.h3`
  font-size: 25px;
`
const Form = styled.form`
  box-sizing: border-box;
  background-color: white;
  height: 40rem;
  width: 25rem;
  position: relative;
  top: -29rem;
  left: 10rem;
`
const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 10rem;
`
const Button = styled.button`
  position: relative;
  right: 10em;
  padding: 7px;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  background-color: #3a3a3a;
  cursor: pointer;
  outline: none;
`
const Input = styled.input`
  border-radius: 7%;
  height: 2rem;
  width: 20rem;
  margin: 20px 0px;
`
const Label = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  position: relative;
  left: -10rem;
`

const Register = (props) => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    password: ''
  })
  const [message, setMessage] = useState(null)

  let timerID = useRef(null)

  useEffect(() => {
    return () => {
      clearTimeout(timerID)
    }
  }, [])

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const resetForm = () => {
    setUser({
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      password: ''
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    AuthService.register(user).then((data) => {
      const { message } = data
      setMessage(message)
      resetForm()
      if (!message.msgError) resetForm()
      if (!message.msgError) {
        timerID = setTimeout(() => {
          props.history.push('/login')
        }, 2000)
      }
    })
  }

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <H3>Please Register</H3>
        <InputBox>
          <Label htmlFor="email">First Name:</Label>
          <Input
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={onChange}
            placeholder="Enter First Name"
          />
          <Label htmlFor="email">Last Name:</Label>
          <Input
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={onChange}
            placeholder="Enter Last Name"
          />
          <Label htmlFor="email">Email:</Label>
          <Input
            type="text"
            name="email"
            value={user.email}
            onChange={onChange}
            placeholder="Enter Email"
          />
          <Label htmlFor="address">Address:</Label>
          <Input
            type="text"
            name="address"
            value={user.address}
            onChange={onChange}
            placeholder="Enter Address"
          />
          <Label htmlFor="password">Password:</Label>
          <Input
            type="text"
            name="password"
            value={user.password}
            onChange={onChange}
            placeholder="Enter Password"
          />
        </InputBox>
        <Button type="submit">Register</Button>
      </Form>
    </Container>
  )
}

export default Register
