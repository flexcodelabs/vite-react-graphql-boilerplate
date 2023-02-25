import { gql } from "@apollo/client";

export const NEW_NOTIFICATION = gql`
  subscription Notification {
    notification {
      id
      body
      title
    }
  }
`;
