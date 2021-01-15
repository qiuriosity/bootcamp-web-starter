import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { useHistory } from 'react-router-dom'
import { REGISTER } from './graphql'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const [register, { loading, error }] = useMutation(REGISTER, {
    variables: {
      email,
      password,
    },
    onCompleted: () => {
      history.push('/')
    }
  })

  return (
    <>
      <h1>register</h1>
      <input
        type='text'
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type='password'
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={register}>register</button>
    </>
  )
}

export default Register