import { gql } from "@apollo/client";
import client from "../../apollo-client";
import {
  CREATE_ACCOUNT,
  PUBLISH_ACCOUNT,
} from "../../graphql/mutations/userMutations";

export default async ({ body }, res) => {
  const query = gql`
    mutation CreateAccount(
      $firstname: String!
      $lastname: String!
      $password: String!
      $username: String!
      $phone: String
    ) {
      createAccount(
        data: {
          firstname: $firstname
          lastname: $lastname
          password: $password
          username: $username
          phone: $phone
        }
      ) {
        id
      }
    }
  `;

  await client
    .mutate({
      mutation: CREATE_ACCOUNT,
      variables: {
        ...body,
      },
    })
    .then(async result => {
      await client.mutate({
        mutation: PUBLISH_ACCOUNT,
        variables: {
          username: result.data.createAccount.username,
        },
      });

      res.status(200).json(result.data.createAccount.username);
    })
    .catch(error => {
      res.status(500).json(error);
    });

  // await graphql.request(query, {
  //   firstname: body.firstname,
  //   lastname: body.lastname,
  //   password: body.password,
  //   username: body.username,
  //   phone: body.phone,
  // });

  // await graphql.request(
  //   `mutation publishAccount($username: String) {
  //   publishAccount(where: { username: $username }, to: PUBLISHED) {
  //     id
  //   }
  // }`,
  //   { username: body.username }
  // );

  // res.status(200).json(body.username);
};
