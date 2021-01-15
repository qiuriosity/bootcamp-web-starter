import gql from 'graphql-tag'

export const REGISTER = gql`
  mutation register($registerInput: RegisterInput!) {
    register(input: $registerInput) {
      user {
        id
      }
      token
    }
  }
`