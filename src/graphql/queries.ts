import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query getProducts($params: Params!) {
    getBeats(params: $params) {
      name
      description
      id
      photo_url
    }
  }
`;
