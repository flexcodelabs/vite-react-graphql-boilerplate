import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation register($user: UserInput!) {
    register(user: $user) {
      username
      name
      id
      dp
    }
  }
`;
