import { gql } from "@apollo/client";

export const GET_USER = gql`
  query GetUser($username: String!) {
    account(where: { username: $username }) {
      bio
      email
      facebook
      firstname
      instagram
      lastname
      phone
      twitter
      username
      whatsapp
      store {
        address
        avatar {
          url
        }
        description
        name
        products {
          category
          description
          id
          name
          price
          image {
            url
          }
          variants {
            name
            value
          }
        }
        reviews {
          rating
        }
        state
        tagline
      }
      avatar {
        url
      }
    }
  }
`;

export const GET_ALL_ACCOUNTS = gql`
  query GetAllAccounts {
    accounts {
      username
    }
  }
`;
