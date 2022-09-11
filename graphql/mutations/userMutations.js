import { gql } from "@apollo/client";

export const CREATE_ACCOUNT = gql`
  mutation CreateAccount(
    $firstname: String!
    $lastname: String!
    $username: String!
    $password: String!
    $phone: String
  ) {
    createAccount(
      data: {
        firstname: $firstname
        lastname: $lastname
        username: $username
        password: $password
        phone: $phone
      }
    ) {
      username
    }
  }
`;

export const PUBLISH_ACCOUNT = gql`
  mutation PublishAccount($username: String!) {
    publishAccount(where: { username: $username }, to: PUBLISHED) {
      username
    }
  }
`;
