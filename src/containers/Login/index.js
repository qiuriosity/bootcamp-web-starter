import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { useHistory, Link } from 'react-router-dom'
import { LOGIN } from './graphql'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const [login, { loading, error }] = useMutation(LOGIN, {
    variables: {
      email,
      password,
    },
    onCompleted: ({ login: { token } }) => {
      localStorage.setItem('token', token)
      history.push('/home')
    }
  })

  return (
    <>
      <h1>log in</h1>
      <input
        type='text'
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type='password'
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={login}>log in</button>
      <Link to='/register'>register for account</Link>
    </>
  )
}

export default Login