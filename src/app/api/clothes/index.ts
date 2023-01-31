import { gql } from "@apollo/client";

export const CATEGORIES = gql`
  query {
    collections {
      id
      title
    }
  }
`;

export const CLOTHES_LIST_ACCORDING_TITLE = gql`
  query ($title: String) {
    getCollectionsByTitle(title: $title) {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;
